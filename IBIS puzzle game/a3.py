"""
CSSE7030 Assignment 3
Semester 2, 2020
"""
import tkinter as tk
from PIL import Image, ImageTk
from tkinter import messagebox, filedialog

# Fill these in with your details
__author__ = "{{David Guo}} ({{43892583}})"
__email__ = "david.guo@uqconnect.edu.au"
__date__ = "30/10/2020"

PLAYER = "O"
KEY = "K"
DOOR = "D"
WALL = "#"
MOVE_INCREASE = "M"
SPACE = " "
TASK_ONE = "TASK_ONE"
TASK_TWO = "TASK_TWO"
MASTERS = "MASTERS"
DIRECTIONS = {
    "W": (-1, 0),
    "S": (1, 0),
    "D": (0, 1),
    "A": (0, -1)
}
GAME_LEVELS = {
            # dungeon layout: max moves allowed
            "game1.txt": 7,
            "game2.txt": 12,
            "game3.txt": 19, }


def load_game(filename):
    """Create a 2D array of string representing the dungeon to display.
    
    Parameters:
        filename (str): A string representing the name of the level.

    Returns:
        (list<list<str>>): A 2D array of strings representing the 
            dungeon.
    """
    dungeon_layout = []

    with open(filename, 'r') as file:
        for line in file:
            line = line.strip()
            dungeon_layout.append(list(line))

    return dungeon_layout




class Entity:
    """ """

    _id = "Entity"

    def __init__(self):
        """
        Something the player can interact with
        """
        self._collidable = True

    def get_id(self):
        """ """
        return self._id

    def set_collide(self, collidable):
        """ """
        self._collidable = collidable

    def can_collide(self):
        """ """
        return self._collidable

    def __str__(self):
        return f"{self.__class__.__name__}({self._id!r})"

    def __repr__(self):
        return str(self)


class Wall(Entity):
    """ """

    _id = WALL

    def __init__(self):
        """ """
        super().__init__()
        self.set_collide(False)


class Item(Entity):
    """ """

    def on_hit(self, game):
        """ """
        raise NotImplementedError


class Key(Item):
    """ """

    _id = KEY

    def on_hit(self, game):
        """ """
        player = game.get_player()
        player.add_item(self)
        game.get_game_information().pop(player.get_position())


class MoveIncrease(Item):
    """ """

    _id = MOVE_INCREASE

    def __init__(self, moves=5):
        """ """
        super().__init__()
        self._moves = moves

    def on_hit(self, game):
        """ """
        player = game.get_player()
        player.change_move_count(self._moves)
        game.get_game_information().pop(player.get_position())

    def get_moves(self):
        """return the move in moveincrease"""
        return self._moves


class Door(Entity):
    """ """
    _id = DOOR

    def on_hit(self, game):
        """ """
        player = game.get_player()
        for item in player.get_inventory():
            if item.get_id() == KEY:
                game.set_win(True)
                return

        print("You don't have the key!")


class Player(Entity):
    """ """

    _id = PLAYER

    def __init__(self, move_count):
        """ """
        super().__init__()
        self._move_count = move_count
        self._inventory = []
        self._position = None

    def set_position(self, position):
        """ """
        self._position = position

    def get_position(self):
        """ """
        return self._position

    def change_move_count(self, number):
        """
        Parameters:
            number (int): number to be added to move count
        """
        self._move_count += number

    def moves_remaining(self):
        """ """
        return self._move_count

    def add_item(self, item):
        """Adds item (Item) to inventory
        """
        self._inventory.append(item)

    def get_inventory(self):
        """return the player's inventory"""
        return self._inventory

    def decrease_move_count(self, number):
        """decrease the player's movecount
        parameter:
            number(int): decrease the player's movecount by this parameter
        """
        self._move_count -= number

    def clear_inventory(self):
        """set the player's inventory back to empty default list"""
        self._inventory = []


class GameLogic:
    """ """

    def __init__(self, dungeon_name):
        self._dungeon = load_game(dungeon_name)
        self._dungeon_size = len(self._dungeon)
        self._player = Player(GAME_LEVELS[dungeon_name])
        self._game_information = self.init_game_information()
        self._win = False

    def get_positions(self, entity):
        """ """
        positions = []
        for row, line in enumerate(self._dungeon):
            for col, char in enumerate(line):
                if char == entity:
                    positions.append((row, col))

        return positions

    def init_game_information(self):
        """ """
        player_pos = self.get_positions(PLAYER)[0]
        key_position = self.get_positions(KEY)[0]
        door_position = self.get_positions(DOOR)[0]
        wall_positions = self.get_positions(WALL)
        move_increase_positions = self.get_positions(MOVE_INCREASE)

        self._player.set_position(player_pos)

        information = {
            key_position: Key(),
            door_position: Door(),
        }

        for wall in wall_positions:
            information[wall] = Wall()

        for move_increase in move_increase_positions:
            information[move_increase] = MoveIncrease()

        return information

    def get_player(self):
        """ """
        return self._player

    def get_entity(self, position):
        """ """
        return self._game_information.get(position)

    def get_entity_in_direction(self, direction):
        """ """
        new_position = self.new_position(direction)
        return self.get_entity(new_position)

    def get_game_information(self):
        """ """
        return self._game_information

    def get_dungeon_size(self):
        """ """
        return self._dungeon_size

    def move_player(self, direction):
        """ """
        new_pos = self.new_position(direction)
        self.get_player().set_position(new_pos)

    def collision_check(self, direction):
        """
        Check to see if a player can travel in a given direction
        Parameters:
            direction (str): a direction for the player to travel in.

        Returns:
            (bool): False if the player can travel in that direction without colliding otherwise True.
        """
        new_pos = self.new_position(direction)
        entity = self.get_entity(new_pos)
        if entity is not None and not entity.can_collide():
            return True

        return not (0 <= new_pos[0] < self._dungeon_size and 0 <= new_pos[1] < self._dungeon_size)

    def new_position(self, direction):
        """ """
        x, y = self.get_player().get_position()
        dx, dy = DIRECTIONS[direction]
        return x + dx, y + dy

    def check_game_over(self):
        """ """
        return self.get_player().moves_remaining() <= 0

    def set_win(self, win):
        """ """
        self._win = win

    def won(self):
        """ """
        return self._win


class AbstractGrid(tk.Canvas):
    """AbstractGrid class will do calculations"""

    def __init__(self, master, rows, cols, width, height, **kwargs):
        """construct abstract grid class and calculate the width and height of each cell
        parameters:
            master: a frame that wrap everything in the window
            rows (int): number of rows of the dungeon map
            cols (int): number of cols of the dungeon map
            width (int): width of the canvas
            height (int): height of the canvas
            **kwargs: any keyword argument the canvas takes in
        """
        super().__init__(master, width=width, height=height, **kwargs)
        self.rows = rows
        self.cols = cols
        self.width = width
        self.height = height
        self.cell_width = self.width / self.cols
        self.cell_height = self.height / self.rows

    def get_bbox(self, position):
        """Returns the bounding box for the (row, col) position.
        parameter:
            position(tuple): the row and column position of a single cell
        return:
            (list): x1,y1,x2,y2 coordinate in pixel of bounding box at the current position
        """
        row, col = position
        x1 = col * self.cell_width
        y1 = row * self.cell_height
        x2 = col * self.cell_width + self.cell_width
        y2 = row * self.cell_height + self.cell_height
        bounding_box = [x1, y1, x2, y2]
        return bounding_box

    def pixel_to_position(self, pixel):
        """Converts the x, y pixel position (in graphics units) to a (row, col) position, and return the (row, col) in tuple.
        parameter:
            pixel(tuple): x and y coordinate in pixel
        return:
            (tuple): the row and col at the current pixel position
        """
        x, y = pixel
        row = None
        col = None

        # use the pixel of each horizontal and vertical line, if smaller, then the row, col position is the number of line - 1
        for num in range(0, self.cols + 1):
            if x < self.cell_width * num:
                col = num - 1
                break
        for num in range(0, self.rows + 1):
            if y < self.cell_height * num:
                row = num - 1
                break
        return (row, col)

    def get_position_center(self, position):
        """
        Gets the graphics coordinates for the center of the cell at the given (row, col) position.
        parameter:
            position(tuple): the row and column position of a single cell
        return:
            (list): the x and y coordinate of the center of the box at current position
        """
        row, col = position
        x = col * self.cell_width + self.cell_width / 2
        y = row * self.cell_height + self.cell_height / 2
        return [x, y]

    def annotate_position(self, position, text):
        """Annotates the cell at the given (row, col) position with the provided text.
        parameter:
            position(tuple): the row and column position of a single cell
            text(str): the text content to be created in the middle of the cell
        """
        x, y = self.get_position_center(position)
        self.player_annotation = self.create_text(x, y, text=text)


class DungeonMap(AbstractGrid):
    """draw the map by rectangles"""

    def __init__(self, master, size, width=600, **kwargs):
        """construct parents class
        parameters:
            master: a frame that wrap everything in the window
            size (int): number of row and column of the dungeon map
            width (int): set the width of the canvas
            **kwargs: any keyword arguments the canvas takes in
        """
        super().__init__(master, rows=size, cols=size, width=width, height=width, **kwargs)

    def draw_grid(self, dungeon, player_position):
        """
        Draws the dungeon on the DungeonMap based on dungeon, and draws the player at the specified (row, col) position.
        parameters:
            dungeon(dict): game information with key as (row,col) position and value as entity instance
            player_position(tuple): the (row,col) position of the player entity
        """

        self.delete(tk.ALL)

        # create rectangle using the bounding box of each item, bounding box for each item is calculated by get_bbox
        for key, value in dungeon.items():
            position = key
            bounding_box = self.get_bbox(position)
            x1, y1, x2, y2 = bounding_box
            if str(value) == "Wall('#')":
                self.create_rectangle(x1, y1, x2, y2, fill="dark grey")
            elif str(value) == "Key('K')":
                self.create_rectangle(x1, y1, x2, y2, fill="yellow")
                self.annotate_position(key, "Trash")

            elif str(value) == "Door('D')":
                self.create_rectangle(x1, y1, x2, y2, fill="red")
                self.annotate_position(key, "Nest")

            elif str(value) == "MoveIncrease('M')":
                self.create_rectangle(x1, y1, x2, y2, fill="orange")
                self.annotate_position(key, "Banana")

        player_box = self.get_bbox((player_position[0], player_position[1]))
        x1, y1, x2, y2 = player_box
        self.player_rectangle = self.create_rectangle(x1, y1, x2, y2, fill="medium spring green")
        self.annotate_position(player_position, "Ibis")


class AdvanceDungeonMap(DungeonMap):
    """draw the map using images"""

    def __init__(self, master, size, width=600, **kwargs):
        """construct parents class
        parameters:
            master: a frame that wrap everything in the window
            size (int): number of row and column of the dungeon map
            width (int): set the width of the canvas
            **kwargs: any keyword arguments the canvas takes in
        """
        super().__init__(master, size=size, width=width, **kwargs)
        self.create_images()

    def create_images(self):
        """
        open,resize images and store them in a dictionary
        """

        empty = Image.open("images/empty.gif")
        empty = empty.resize((int(self.cell_width), int(self.cell_height)))
        key = Image.open("images/key.gif")
        key = key.resize((int(self.cell_width), int(self.cell_height)))
        player = Image.open("images/player.gif")
        player = player.resize((int(self.cell_width), int(self.cell_height)))
        door = Image.open("images/door.gif")
        door = door.resize((int(self.cell_width), int(self.cell_height)))
        moveIncrease = Image.open("images/moveIncrease.gif")
        moveIncrease = moveIncrease.resize((int(self.cell_width), int(self.cell_height)))
        wall = Image.open("images/wall.gif")
        wall = wall.resize((int(self.cell_width), int(self.cell_height)))

        self.images = {"empty": ImageTk.PhotoImage(empty), "key": ImageTk.PhotoImage(key),
                       "player": ImageTk.PhotoImage(player), "door": ImageTk.PhotoImage(door),
                       "moveIncrease": ImageTk.PhotoImage(moveIncrease), "wall": ImageTk.PhotoImage(wall)}

    def draw_advance_grid(self, dungeon, player_position):
        """
        Draws the dungeon on the DungeonMap based on dungeon, and draws the player at the specified (row, col) position using images.
        parameters:
            dungeon(dict): game information with key as (row,col) position and value as entity instance
            player_position(tuple): the (row,col) position of the player entity
        """
        self.delete(tk.ALL)

        # create grass for all cells
        for row in range(0, self.rows):
            for col in range(0, self.cols):
                x, y = self.get_position_center((row, col))
                self.create_image(x, y, image=self.images["empty"])

        # create different images for each cell according to their class's string method
        for key, value in dungeon.items():
            position = key
            x, y = self.get_position_center(position)
            if str(value) == "Wall('#')":
                self.create_image(x, y, image=self.images["wall"])

            elif str(value) == "Key('K')":
                self.create_image(x, y, image=self.images["key"])

            elif str(value) == "Door('D')":
                self.create_image(x, y, image=self.images["door"])

            elif str(value) == "MoveIncrease('M')":
                self.create_image(x, y, image=self.images["moveIncrease"])

        x, y = self.get_position_center((player_position[0], player_position[1]))
        self.create_image(x, y, image=self.images["player"])


class KeyPad(AbstractGrid):
    """calculate position, set command, and draw keypad in a canvas"""

    def __init__(self, master, width=200, height=100, **kwargs):
        """construct the parent class, create variables, and draw the keypad
        parameters:
            master: a frame that wrap everything in the window
            width (int): set the width of the keypad canvas
            height(int): set the height of the keypad canvas
            **kwargs: any keyword arguments the canvas takes in
        """
        super().__init__(master, rows=2, cols=3, width=width, height=height, **kwargs)
        key_position = ((0, 1), (1, 0), (1, 1), (1, 2))
        key = ('W', 'A', 'S', 'D')
        for index, position in enumerate(key_position):
            bounding_box = self.get_bbox(position)
            x1, y1, x2, y2 = bounding_box
            self.create_rectangle(x1, y1, x2, y2, fill="dark grey")
            self.annotate_position(position, key[index])

        self.command = None

    def pixel_to_direction(self, pixel):
        """Converts the x, y pixel position clicked to a (row,col) position, indicating which keypad is clicked, and assign command accordingly
        parameter:
            pixel(tuple): x,y pixel position
        """

        position = self.pixel_to_position(pixel)
        if position == (0, 1):
            self.command = "W"
        elif position == (1, 0):
            self.command = "A"
        elif position == (1, 1):
            self.command = "S"
        elif position == (1, 2):
            self.command = "D"

    def pressed(self, e):
        """refresh and assign command"""
        self.command = None
        self.pixel_to_direction((e.x, e.y))

    def get_command(self):
        """return command"""
        return self.command

    def reset_command(self):
        """reset command back to None"""
        self.command = None

    def set_command(self, command):
        """set command"""
        self.command = command


class StatusBar(tk.Frame):
    """Draw status bar"""

    def __init__(self, master, width=800, height=200, **kwargs):
        """construct status bar, create variables, resize image, create frames, and pack labels, images, buttons into framesconstruct parents class
        parameters:
            master: a frame that wrap everything in the window
            width (int): set the width of the frame
            height (int): set the height of the frame
            **kwargs: any keyword arguments the canvas takes in
        """
        super().__init__(master, width=width, height=height, **kwargs)
        self.second = 0
        self.minute = 0
        self.execute_timer = True

        # Resize image
        img1 = Image.open("images/clock.gif")
        img1 = img1.resize((round(img1.size[0] * .2), round(img1.size[1] * .2)))
        img2 = Image.open("images/lightning.gif")
        img2 = img2.resize((round(img2.size[0] * .02), round(img2.size[1] * .02)))
        img3 = Image.open("images/lives.gif")
        img3 = img3.resize((round(img3.size[0] * .06), round(img3.size[1] * .06)))
        self.images = {"clock": ImageTk.PhotoImage(img1), "lightning": ImageTk.PhotoImage(img2),
                       "lives": ImageTk.PhotoImage(img3)}
        # Button
        self.button_frame = tk.Frame(self)
        self.button_frame.pack(side=tk.LEFT, padx=75)
        self.new_game_btn = tk.Button(self.button_frame, text="New Game")
        self.new_game_btn.pack()
        self.quit_game_btn = tk.Button(self.button_frame, text="Quit")
        self.quit_game_btn.pack(pady=7)

        # Time elapsed
        self.time_elapsed_frame = tk.Frame(self)
        self.time_elapsed_frame.pack(side=tk.LEFT)
        self.canvas = tk.Canvas(self.time_elapsed_frame, width=50, height=200)
        self.canvas.pack(side=tk.LEFT)
        self.canvas.create_image(30, 30, image=self.images["clock"])
        tk.Label(self.time_elapsed_frame, text="Time elapsed").pack()
        self.time_elapsed = tk.Label(self.time_elapsed_frame, text="0m 6s", font=("", 11))
        self.time_elapsed.pack()

        # Move left
        self.move_left_frame = tk.Frame(self)
        self.move_left_frame.pack(side=tk.LEFT, padx=150)
        self.canvas_move = tk.Canvas(self.move_left_frame, width=50, height=200)
        self.canvas_move.pack(side=tk.LEFT)
        self.canvas_move.create_image(30, 30, image=self.images["lightning"])
        tk.Label(self.move_left_frame, text="Moves left").pack()
        self.move_label = tk.Label(self.move_left_frame, text="3 moves remaining", font=("", 11))
        self.move_label.pack()

        self.timer()

    def get_second_minute(self):
        """return second and minute in a tuple"""
        return (self.second, self.minute)

    def set_second_minute(self, second_minute):
        """set second and minute
        parameter:
            second_minute(tuple): (second,minute) to set second and minute
        """
        self.second = second_minute[0]
        self.minute = second_minute[1]

    def new_game(self, new_game_click):
        """deliver method from other class to new game button by calling in other class
        parameter:
            new_game_click(method): give new_game_btn a method from gameapp class to start a new game 
        """
        self.new_game_btn.config(command=new_game_click)

    def quit_game(self, quit_game_click):
        """deliver method from other class to quit game button by calling in other class
        parameter:
            quit_game_click(method): give quit_game_btn a method from gameapp class to quit the game 
        """
        self.quit_game_btn.config(command=quit_game_click)

    def timer(self):
        """start the timer"""
        if self.execute_timer:
            if self.second < 60:
                self.second += 1
            else:
                self.second = 0
                self.minute += 1

            self.time_elapsed.config(text=f"{self.minute}m {self.second}s")

        self.master.after(1000, self.timer)

    def stop_timer(self):
        """stop the timer"""
        self.execute_timer = False


class MasterStatusBar(StatusBar):
    """Status bar with lives"""

    def __init__(self, master, width=800, height=200, **kwargs):
        """construct parent class, create frame, and pack images, button and label into the frame"""
        super().__init__(master, width=width, height=height, **kwargs)
        self.lives = 3
        self.lives_frame = tk.Frame(self)
        self.lives_frame.pack(side=tk.LEFT)

        # Use live frame, image, label and button
        self.button_frame.pack(side=tk.LEFT, padx=40)
        self.move_left_frame.pack(side=tk.LEFT, padx=70)

        self.canvas_lives = tk.Canvas(self.lives_frame, width=50, height=200)
        self.canvas_lives.pack(side=tk.LEFT)
        self.canvas_lives.create_image(30, 30, image=self.images["lives"])

        self.lives_label = tk.Label(self.lives_frame, text="Lives remaining: 3")
        self.lives_label.pack()

        self.lives_button = tk.Button(self.lives_frame, text="Use life")
        self.lives_button.pack()

    def decrease_live(self):
        """decrease lives by one"""
        if self.lives > 0:
            self.lives -= 1

    def get_live(self):
        """return lives"""
        return self.lives

    def use_live(self, use_live_click):
        """deliver method from other class to use lives button by calling in other class
        parameter:
            use_live_click(method): give lives_button a method from gameapp class to use lives 
        """
        self.lives_button.config(command=use_live_click)

    def set_live(self, number):
        """set the number of lives"""
        self.lives = number


class GameApp():
    """Game controller"""

    def __init__(self, master, task, dungeon_name):
        """construct class, create window, instantiate classes, pack sections, initialise the game
        parameters:
            master (class): game window
            task (str): tell the program which task to display
            dungeon_name (str): the name of the gamemap file
        """
        self.dungeon_name = dungeon_name
        self.task = task
        self.original_master = master
        self.original_master.title("Key Cave Adventure Game")

        self.master = tk.Frame(self.original_master)
        self.master.pack(fill=tk.BOTH, expand=True)

        self.label = tk.Label(self.master, text="Key Cave Adventure Game", bg="light green")
        self.label.pack(fill=tk.BOTH)

        # TASK ONE INIT
        if self.task == "TASK_ONE":
            self.original_master.geometry("800x600")
            # Game Logic
            self.game = GameLogic(dungeon_name)
            self.dungeonMap = DungeonMap(self.master, size=self.game.get_dungeon_size(), bg="light grey")
            self.dungeonMap.pack(side=tk.LEFT)
            self.dungeonMap.draw_grid(self.game.get_game_information(), self.game.get_player().get_position())
            # Key Pad
            self.keyPad = KeyPad(self.master)
            self.keyPad.pack(side=tk.LEFT)
            self.keyPad.bind("<Button-1>", self.keyPad_pressed)
            self.keyPad.bind_all("<Key>", self.key_pressed)


        # TASK TWO INIT
        elif self.task == "TASK_TWO":
            self.original_master.geometry("840x800")
            # Game Logic
            self.game = GameLogic(dungeon_name)
            self.game_frame = tk.Frame(self.master)
            self.game_frame.pack()
            # Advance Dungeon Map
            self.advanceDungeonMap = AdvanceDungeonMap(self.game_frame, size=self.game.get_dungeon_size(),
                                                       bg="light grey")
            self.advanceDungeonMap.pack(side=tk.LEFT)
            self.advanceDungeonMap.draw_advance_grid(self.game.get_game_information(),
                                                     self.game.get_player().get_position())
            # Key Pad
            self.keyPad = KeyPad(self.game_frame)
            self.keyPad.pack(side=tk.LEFT)
            self.keyPad.bind("<Button-1>", self.keyPad_pressed)
            self.keyPad.bind_all("<Key>", self.key_pressed)
            # Status Bar
            self.statusBar = StatusBar(self.master)
            self.statusBar.pack(side=tk.LEFT)
            self.statusBar.move_label.config(text=f"{self.game.get_player().moves_remaining()} moves remaining")
            # Bind function to new_game quit_game button in statusBar
            self.statusBar.new_game(self.new_game)
            self.statusBar.quit_game(self.file_quit_game)

            # Menu bar
            menubar = tk.Menu(self.original_master)
            self.original_master.config(menu=menubar)
            filemenu = tk.Menu(menubar)
            menubar.add_cascade(label="File", menu=filemenu)
            filemenu.add_command(label="New game", command=self.new_game)
            filemenu.add_separator()
            filemenu.add_command(label="Load game", command=self.load_game)
            filemenu.add_command(label="Save game", command=self.save_game)
            filemenu.add_separator()
            filemenu.add_command(label="Quit", command=self.file_quit_game)

            self.filename = None

        # TASK THREE INIT
        elif self.task == "MASTERS":
            self.original_master.geometry("840x800")
            # Game Logic
            self.game = GameLogic(dungeon_name)
            self.game_frame = tk.Frame(self.master)
            self.game_frame.pack()
            # Advance Dungeon Map
            self.advanceDungeonMap = AdvanceDungeonMap(self.game_frame, size=self.game.get_dungeon_size(),
                                                       bg="light grey")
            self.advanceDungeonMap.pack(side=tk.LEFT)
            self.advanceDungeonMap.draw_advance_grid(self.game.get_game_information(),
                                                     self.game.get_player().get_position())
            # Key Pad
            self.keyPad = KeyPad(self.game_frame)
            self.keyPad.pack(side=tk.LEFT)
            self.keyPad.bind("<Button-1>", self.keyPad_pressed)
            self.keyPad.bind_all("<Key>", self.key_pressed)
            # Status Bar
            self.statusBar = MasterStatusBar(self.master)
            self.statusBar.pack(side=tk.LEFT)
            self.statusBar.move_label.config(text=f"{self.game.get_player().moves_remaining()} moves remaining")
            # Bind function to the button in status bar
            self.statusBar.new_game(self.new_game)
            self.statusBar.quit_game(self.file_quit_game)
            self.statusBar.use_live(self.use_live)
            # Menu Bar
            menubar = tk.Menu(self.original_master)
            self.original_master.config(menu=menubar)
            filemenu = tk.Menu(menubar)
            menubar.add_cascade(label="File", menu=filemenu)
            filemenu.add_command(label="New game", command=self.new_game)
            filemenu.add_separator()
            filemenu.add_command(label="Load game", command=self.load_game)
            filemenu.add_command(label="Save game", command=self.save_game)
            filemenu.add_separator()
            filemenu.add_command(label="High score", command=self.display_high_score)
            filemenu.add_separator()
            filemenu.add_command(label="Quit", command=self.file_quit_game)

            # Variables
            self.filename = None

            self.time_each_move = []
            self.player_position_each_move = []
            self.player_position_each_move.append(self.game.get_player().get_position())

            self.key_position = None
            self.move_increase_position = None

    def play(self):
        """Game logic of different task after each keypad clicks or keyboard presses"""
        # TASK ONE PLAY
        if self.task == "TASK_ONE":
            if self.keyPad.get_command() is not None:
                if self.keyPad.get_command() in DIRECTIONS:
                    direction = self.keyPad.get_command()
                    self.game.get_player().change_move_count(-1)
                    self.keyPad.reset_command()

                    if not self.game.collision_check(direction):
                        self.game.move_player(direction)
                        self.dungeonMap.draw_grid(self.game.get_game_information(),
                                                  self.game.get_player().get_position())
                        entity = self.game.get_entity(self.game.get_player().get_position())

                        if entity is not None:
                            entity.on_hit(self.game)

                            if self.game.won():
                                self.dungeonMap.update()
                                self.messageboxTaskOne("You won!")

            if self.game.check_game_over():
                self.dungeonMap.update()
                self.messageboxTaskOne("You lost!")

        # TASK TWO PLAY
        elif self.task == "TASK_TWO":
            if self.keyPad.get_command() is not None:
                if self.keyPad.get_command() in DIRECTIONS:
                    direction = self.keyPad.get_command()

                    self.game.get_player().change_move_count(-1)
                    self.statusBar.move_label.config(text=f"{self.game.get_player().moves_remaining()} moves remaining")
                    self.keyPad.reset_command()

                    if not self.game.collision_check(direction):
                        self.game.move_player(direction)

                        self.advanceDungeonMap.draw_advance_grid(self.game.get_game_information(),
                                                                 self.game.get_player().get_position())
                        entity = self.game.get_entity(self.game.get_player().get_position())
                        if entity is not None:
                            entity.on_hit(self.game)
                            self.statusBar.move_label.config(
                                text=f"{self.game.get_player().moves_remaining()} moves remaining")

                            if self.game.won():
                                self.statusBar.stop_timer()
                                self.advanceDungeonMap.update()
                                self.messageboxTaskTwo("You won!")

            if self.game.check_game_over():
                self.statusBar.stop_timer()
                self.advanceDungeonMap.update()
                self.messageboxTaskTwo("You lost!")

        # TASK THREE PLAY
        elif self.task == "MASTERS":
            if self.keyPad.get_command() is not None:
                if self.keyPad.get_command() in DIRECTIONS:
                    direction = self.keyPad.get_command()
                    self.game.get_player().change_move_count(-1)
                    self.time_each_move.append(self.statusBar.get_second_minute())
                    self.statusBar.move_label.config(text=f"{self.game.get_player().moves_remaining()} moves remaining")
                    self.keyPad.reset_command()
                    self.player_position_each_move.append(self.game.get_player().get_position())

                    if not self.game.collision_check(direction):
                        self.game.move_player(direction)
                        self.player_position_each_move.pop(-1)
                        self.player_position_each_move.append(self.game.get_player().get_position())

                        self.advanceDungeonMap.draw_advance_grid(self.game.get_game_information(),
                                                                 self.game.get_player().get_position())
                        entity = self.game.get_entity(self.game.get_player().get_position())
                        if entity is not None:
                            if str(entity) == "Key('K')":
                                self.key_position = self.game.get_player().get_position()
                            elif str(entity) == "MoveIncrease('M')":
                                self.move_increase_position = self.game.get_player().get_position()

                            entity.on_hit(self.game)
                            self.statusBar.move_label.config(
                                text=f"{self.game.get_player().moves_remaining()} moves remaining")

                            if self.game.won():
                                self.statusBar.stop_timer()
                                self.advanceDungeonMap.update()
                                self.high_score()

            if self.game.check_game_over():
                self.statusBar.stop_timer()
                self.advanceDungeonMap.update()
                self.messageboxTaskTwo("You lost!")

    def keyPad_pressed(self, e):
        """use the pixel position clicked to determine the command
        parameter:
            e(class): click event used to findout the pixel position of the click
        """
        self.keyPad.pressed(e)
        self.play()

    def key_pressed(self, e):
        """keyboard press and set command
        parameter:
            e(class): key press event to find out which key is pressed
        """
        self.keyPad.set_command(e.char.upper())
        self.play()

    def new_game(self):
        """
        destroy the game frame, and reinitialise the game
        """
        self.master.destroy()
        self.__init__(self.original_master, self.task, self.dungeon_name)

    def quit_game(self):
        """
        destroy the whole window
        """
        self.original_master.destroy()

    def messageboxTaskOne(self, message):
        """show message and quit
        parameter:
            message(str): text shows in the message box
        """
        ans = messagebox.showinfo(title=None, message=message)
        if ans:
            self.quit_game()

    def messageboxTaskTwo(self, title):
        """show message and ask yes no to restart or quit:
        parameter:
            title(str): title of the message box
        """
        if title == "You lost!":
            ans = messagebox.askyesno(title, "You lost. Would you like to play again?")
        elif title == "You won!":
            score = self.statusBar.get_second_minute()
            score = score[0] + score[1] * 60
            ans = messagebox.askyesno(title,
                                      f"you have finished the level with a score of {score}. Would you like to play again?")

        if ans:
            self.new_game()
        else:
            self.quit_game()

    def file_quit_game(self):
        """ask quit game"""
        ans = messagebox.askyesno("Quit game", "Are you sure that you want to quit?")
        if ans:
            self.quit_game()

    def save_game(self):
        """create and save game information into a file"""
        if self.filename is None:
            filename = filedialog.asksaveasfilename()
            if filename:
                self.filename = filename
        if self.filename:
            with open(self.filename, "w") as fd:
                # write game-information for TASK_ONE
                fd.write("Key Cave Adventure Game information:")
                fd.write("\n")
                fd.write(f"{self.statusBar.get_second_minute()}")
                fd.write("\n")
                fd.write(f"{self.game.get_player().get_position()}")
                fd.write("\n")
                fd.write(f"{self.game.get_player().moves_remaining()}")
                fd.write("\n")
                fd.write(f"{self.dungeon_name}")
                fd.write("\n")
                fd.write(f"{self.game.get_player().get_inventory()}")
                fd.write("\n")

                if self.task == "MASTERS":
                    fd.write("MASTERS")
                    fd.write("\n")
                elif self.task == "TASK_TWO":
                    fd.write("TASK_TWO")
                    fd.write("\n")

                # write game-information for MASTERS
                if self.task == "MASTERS":
                    fd.write(f"{self.statusBar.get_live()}")
                    fd.write("\n")
                    fd.write(f"{self.key_position}")
                    fd.write("\n")
                    fd.write(f"{self.move_increase_position}")
                    fd.write("\n")
                    fd.write(f"{self.time_each_move}")
                    fd.write("\n")
                    fd.write(f"{self.player_position_each_move}")
                    fd.write("\n")

                for key, value in self.game.get_game_information().items():
                    fd.write(f"{key}")
                    fd.write("\n")
                    fd.write(f"{value}")
                    fd.write("\n")

    def load_game(self):
        """load information from a document, and use information to load the game"""
        filename = filedialog.askopenfilename()
        if filename:
            self.filename = filename
        if self.filename:
            information = []
            # check for error or incorrect file
            try:
                with open(self.filename, "r") as fd:
                    for line in fd:
                        line = line.strip()
                        information.append(line)
            except:
                messagebox.showinfo(title=None, message="Incorrect file!")

            else:
                if information == []:
                    messagebox.showinfo(title=None, message="Incorrect file!")

                elif information[0] == "Key Cave Adventure Game information:":
                    if information[6] != self.task:
                        messagebox.showinfo(title=None, message="Incorrect file!")
                    else:
                        # no error, start loading the game
                        game_info_dict = {}

                        if self.task == "TASK_TWO":
                            game_info = information[7::]
                        elif self.task == "MASTERS":
                            game_info = information[12::]

                        # convert string dictionary into dictionary with entity instance as value

                        for num in range(0, len(game_info), 2):
                            position = game_info[num].replace(")", '').replace("(", '').split(',')
                            position = (int(position[0]), int(position[1]))
                            game_info_dict[position] = game_info[num + 1]

                        for key, value in game_info_dict.items():
                            if value == "Key('K')":
                                game_info_dict[key] = Key()
                            elif value == "Wall('#')":
                                game_info_dict[key] = Wall()
                            elif value == "MoveIncrease('M')":
                                game_info_dict[key] = MoveIncrease()
                            elif value == "Door('D')":
                                game_info_dict[key] = Door()

                        # convert string tuple to tuple

                        second_minute = information[1].replace(")", '').replace("(", '').split(',')
                        second_minute = (int(second_minute[0]), int(second_minute[1]))

                        player_position = information[2].replace(")", '').replace("(", '').split(',')
                        player_position = (int(player_position[0]), int(player_position[1]))

                        move_remaining = int(information[3])

                        # init and load game
                        self.master.destroy()
                        self.__init__(self.original_master, self.task, information[4])
                        self.game._game_information = game_info_dict
                        self.game.get_player().set_position(player_position)
                        self.game.get_player()._move_count = move_remaining
                        self.statusBar.set_second_minute(second_minute)
                        self.statusBar.move_label.config(
                            text=f"{self.game.get_player().moves_remaining()} moves remaining")

                        if information[5] != "[]":
                            self.game.get_player().add_item(Key())

                        # MASTERS load lives and position:
                        if self.task == "MASTERS":
                            lives = int(information[7])
                            self.statusBar.set_live(lives)
                            self.statusBar.lives_label.config(text=f"Lives remaining: {self.statusBar.get_live()}")

                            # self.key_position
                            if information[8] == "None":
                                self.key_position = None
                            else:
                                self.key_position = information[8].replace(")", '').replace("(", '').split(',')
                                self.key_position = (int(self.key_position[0]), int(self.key_position[1]))

                            # self.move_increase_position
                            if information[9] == "None":
                                self.move_increase_position = None
                            else:
                                self.move_increase_position = information[9].replace(")", '').replace("(", '').split(
                                    ',')
                                self.move_increase_position = (
                                int(self.move_increase_position[0]), int(self.move_increase_position[1]))

                            # self.time_each_move
                            time_each_move = information[10].replace("[", '').replace("]", '').replace('(', '').replace(
                                ')', '').replace(' ', '').split(',')
                            self.time_each_move = []
                            for num in range(0, len(time_each_move), 2):
                                self.time_each_move.append((int(time_each_move[num]), int(time_each_move[num + 1])))

                            # self.player_position_each_move
                            player_each_move = information[11].replace("[", '').replace("]", '').replace('(',
                                                                                                         '').replace(
                                ')', '').replace(' ', '').split(',')
                            self.player_position_each_move = []
                            for num in range(0, len(player_each_move), 2):
                                self.player_position_each_move.append(
                                    (int(player_each_move[num]), int(player_each_move[num + 1])))

                        self.advanceDungeonMap.draw_advance_grid(self.game.get_game_information(),
                                                                 self.game.get_player().get_position())
                else:
                    messagebox.showinfo(title=None, message="Incorrect file!")

    def use_live(self):
        """undo the most recent move, time back to previous move, move increase by one, lives decrease by one"""
        if self.statusBar.get_live() > 0:
            self.statusBar.decrease_live()
            self.statusBar.lives_label.config(text=f"Lives remaining: {self.statusBar.get_live()}")
            self.game.get_player().change_move_count(1)
            self.statusBar.move_label.config(text=f"{self.game.get_player().moves_remaining()} moves remaining")
            if self.time_each_move != []:
                self.statusBar.set_second_minute(self.time_each_move[-1])
                self.time_each_move.pop(-1)

            # the player has moved
            if len(self.player_position_each_move) > 1:
                self.game.get_player().set_position(self.player_position_each_move[-2])

                if self.player_position_each_move[-1] == self.key_position:
                    self.game.get_player().clear_inventory()
                    self.game.get_game_information()[self.key_position] = Key()

                if self.player_position_each_move[-1] == self.move_increase_position:
                    self.game.get_player().decrease_move_count(MoveIncrease().get_moves())
                    self.game.get_game_information()[self.move_increase_position] = MoveIncrease()
                    self.statusBar.move_label.config(text=f"{self.game.get_player().moves_remaining()} moves remaining")

                self.advanceDungeonMap.draw_advance_grid(self.game.get_game_information(),
                                                         self.game.get_player().get_position())
                self.player_position_each_move.pop(-1)

    def high_score(self):
        """show a window to display score and allow the user to enter their name"""
        self.high_score_master = tk.Tk()
        self.high_score_master.geometry("270x80")
        self.high_score_master.title("You Win!")
        tk.Label(self.high_score_master,
                 text=f"You won in {self.statusBar.get_second_minute()[1]}m and {self.statusBar.get_second_minute()[0]}s! Enter your name:").pack()

        self.name_entry = tk.Entry(self.high_score_master)
        self.name_entry.pack()
        tk.Button(self.high_score_master, text="Enter", command=self.save_high_score).pack()

    def save_high_score(self):
        """save high score into a file"""

        with open("highscore", "a") as fd:
            fd.write(
                f"{self.name_entry.get()},{self.statusBar.get_second_minute()[0] + self.statusBar.get_second_minute()[1] * 60}")
            fd.write(f"\n")

        self.high_score_master.destroy()

    def display_high_score(self):
        """read high score from the previously saved file and display top 3 player's name and score in a new window"""

        def display_score():
            """create window with high score label and button"""
            displayScore = tk.Tk()
            displayScore.geometry("170x140")
            displayScore.title("Top 3")
            tk.Label(displayScore, text="High Scores", font=("", 25), bg="light green").pack(fill=tk.X)
            tk.Button(displayScore, text="Done", command=displayScore.destroy).pack()

        information = []
        information_dict = {}
        number = []
        player_name = []
        try:
            with open("highscore", "r") as fd:
                for line in fd:
                    line = line.strip()
                    information.append(line)

        except:
            display_score()

        else:
            if information == []:
                display_score()

            else:
                for item in information:
                    string_item = item.split(',')
                    player_name.append(string_item[0])
                    number.append(int(string_item[1]))

                number = sorted(enumerate(number), key=lambda x: x[1])

                display_score = tk.Tk()
                display_score.geometry("170x140")
                display_score.title("Top 3")
                tk.Label(display_score, text="High Scores", font=("", 25), bg="light green").pack(fill=tk.X)

                #if number of player < 3, the amount of label is determined by the number of player, if more than 3, create label for the first 3 players
                if len(player_name) <= 3:
                    for num in range(0, len(player_name)):
                        if number[num][1] >= 60:
                            tk.Label(display_score,
                                     text=f"{player_name[number[num][0]]}: {number[num][1] // 60}m {number[num][1] % 60}s").pack()

                        else:
                            tk.Label(display_score, text=f"{player_name[number[num][0]]}: {number[num][1]}s").pack()
                else:
                    for num in range(0, 3):
                        if number[num][1] >= 60:
                            tk.Label(display_score,
                                     text=f"{player_name[number[num][0]]}: {number[num][1] // 60}m {number[num][1] % 60}s").pack()

                        else:
                            tk.Label(display_score, text=f"{player_name[number[num][0]]}: {number[num][1]}s").pack()

                tk.Button(display_score, text="Done", command=display_score.destroy).pack()



root = tk.Tk()
GameApp(root, task=MASTERS, dungeon_name="game2.txt")
root.mainloop()
