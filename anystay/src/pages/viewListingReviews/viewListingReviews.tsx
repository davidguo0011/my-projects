// import { Component } from 'react'

// export default class ViewListingReviews extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             reviews: [
//                 {
//                     overall: 3,
//                     communication: 3,
//                     amenities: 4,
//                     cleaning: 4,
//                     location: 3,
//                     service: 5,
//                     value: 5,
//                     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in quam et tincidunt. Vestibulum gravida leo dolor, commodo pulvinar dolor pulvinar et. Mauris facilisis sed enim non porttitor. Fusce non ex hendrerit odio tempor rhoncus at viverra erat. In vel euismod magna, eget sagittis massa. Phasellus fringilla pharetra turpis ac eleifend. Aenean quis elit at ligula pharetra finibus. Donec et elementum sem. Phasellus mollis neque eget augue posuere, at ornare purus blandit. Fusce pellentesque sapien sit amet mauris ullamcorper, ac placerat nisi venenatis. Cras quis risus vel odio fermentum laoreet ac in nunc. Suspendisse sagittis posuere ipsum quis sagittis. Nulla non lacus ut risus feugiat condimentum non lobortis urna. Sed id libero pharetra, sodales dui ut, aliquam ipsum. Maecenas a iaculis massa. Mauris ac interdum dui. Nullam non tortor et risus ornare commodo nec venenatis justo. Maecenas luctus, odio non vestibulum suscipit, nulla magna porttitor massa, vel ultrices risus magna sit amet augue. Proin at diam gravida, eleifend augue ut, vehicula neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam congue, risus sit amet cursus faucibus, odio sem ultrices risus, interdum semper urna lectus ac est. Nullam sed elit varius, auctor arcu et, imperdiet mi. Suspendisse sollicitudin nisi ac arcu auctor sagittis.",
//                     firstName: "Vincent",
//                     profileURL: "https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png",
//                     createdAt: new Date()
//                 },
//                 {
//                     overall: 3,
//                     communication: 2,
//                     amenities: 3,
//                     cleaning: 5,
//                     location: 3,
//                     service: 3,
//                     value: 5,
//                     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in quam et tincidunt. Vestibulum gravida leo dolor, commodo pulvinar dolor pulvinar et. Mauris facilisis sed enim non porttitor. Fusce non ex hendrerit odio tempor rhoncus at viverra erat. In vel euismod magna, eget sagittis massa. Phasellus fringilla pharetra turpis ac eleifend. Aenean quis elit at ligula pharetra finibus. Donec et elementum sem. Phasellus mollis neque eget augue posuere, at ornare purus blandit. Fusce pellentesque sapien sit amet mauris ullamcorper, ac placerat nisi venenatis. Cras quis risus vel odio fermentum laoreet ac in nunc. Suspendisse sagittis posuere ipsum quis sagittis. Nulla non lacus ut risus feugiat condimentum non lobortis urna. Sed id libero pharetra, sodales dui ut, aliquam ipsum. Maecenas a iaculis massa. Mauris ac interdum dui. Nullam non tortor et risus ornare commodo nec venenatis justo. Maecenas luctus, odio non vestibulum suscipit, nulla magna porttitor massa, vel ultrices risus magna sit amet augue. Proin at diam gravida, eleifend augue ut, vehicula neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam congue, risus sit amet cursus faucibus, odio sem ultrices risus, interdum semper urna lectus ac est. Nullam sed elit varius, auctor arcu et, imperdiet mi. Suspendisse sollicitudin nisi ac arcu auctor sagittis.",
//                     firstName: "Larry",
//                     profileURL: "https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png",
//                     createdAt: new Date()
//                 },
//                 {
//                     overall: 3,
//                     communication: 5,
//                     amenities: 4,
//                     cleaning: 1,
//                     location: 1,
//                     service: 2,
//                     value: 3,
//                     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in quam et tincidunt. Vestibulum gravida leo dolor, commodo pulvinar dolor pulvinar et. Mauris facilisis sed enim non porttitor. Fusce non ex hendrerit odio tempor rhoncus at viverra erat. In vel euismod magna, eget sagittis massa. Phasellus fringilla pharetra turpis ac eleifend. Aenean quis elit at ligula pharetra finibus. Donec et elementum sem. Phasellus mollis neque eget augue posuere, at ornare purus blandit. Fusce pellentesque sapien sit amet mauris ullamcorper, ac placerat nisi venenatis. Cras quis risus vel odio fermentum laoreet ac in nunc. Suspendisse sagittis posuere ipsum quis sagittis. Nulla non lacus ut risus feugiat condimentum non lobortis urna. Sed id libero pharetra, sodales dui ut, aliquam ipsum. Maecenas a iaculis massa. Mauris ac interdum dui. Nullam non tortor et risus ornare commodo nec venenatis justo. Maecenas luctus, odio non vestibulum suscipit, nulla magna porttitor massa, vel ultrices risus magna sit amet augue. Proin at diam gravida, eleifend augue ut, vehicula neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam congue, risus sit amet cursus faucibus, odio sem ultrices risus, interdum semper urna lectus ac est. Nullam sed elit varius, auctor arcu et, imperdiet mi. Suspendisse sollicitudin nisi ac arcu auctor sagittis.",
//                     firstName: "Vincent",
//                     profileURL: "https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png",
//                     createdAt: new Date()
//                 },
//                 {
//                     overall: 3,
//                     communication: 3,
//                     amenities: 3,
//                     cleaning: 3,
//                     location: 3,
//                     service: 3,
//                     value: 3,
//                     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in quam et tincidunt. Vestibulum gravida leo dolor, commodo pulvinar dolor pulvinar et. Mauris facilisis sed enim non porttitor. Fusce non ex hendrerit odio tempor rhoncus at viverra erat. In vel euismod magna, eget sagittis massa. Phasellus fringilla pharetra turpis ac eleifend. Aenean quis elit at ligula pharetra finibus. Donec et elementum sem. Phasellus mollis neque eget augue posuere, at ornare purus blandit. Fusce pellentesque sapien sit amet mauris ullamcorper, ac placerat nisi venenatis. Cras quis risus vel odio fermentum laoreet ac in nunc. Suspendisse sagittis posuere ipsum quis sagittis. Nulla non lacus ut risus feugiat condimentum non lobortis urna. Sed id libero pharetra, sodales dui ut, aliquam ipsum. Maecenas a iaculis massa. Mauris ac interdum dui. Nullam non tortor et risus ornare commodo nec venenatis justo. Maecenas luctus, odio non vestibulum suscipit, nulla magna porttitor massa, vel ultrices risus magna sit amet augue. Proin at diam gravida, eleifend augue ut, vehicula neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam congue, risus sit amet cursus faucibus, odio sem ultrices risus, interdum semper urna lectus ac est. Nullam sed elit varius, auctor arcu et, imperdiet mi. Suspendisse sollicitudin nisi ac arcu auctor sagittis.",
//                     firstName: "Vincent",
//                     profileURL: "https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png",
//                     createdAt: new Date()
//                 },
//                 {
//                     overall: 3,
//                     communication: 3,
//                     amenities: 3,
//                     cleaning: 3,
//                     location: 3,
//                     service: 3,
//                     value: 3,
//                     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in quam et tincidunt. Vestibulum gravida leo dolor, commodo pulvinar dolor pulvinar et. Mauris facilisis sed enim non porttitor. Fusce non ex hendrerit odio tempor rhoncus at viverra erat. In vel euismod magna, eget sagittis massa. Phasellus fringilla pharetra turpis ac eleifend. Aenean quis elit at ligula pharetra finibus. Donec et elementum sem. Phasellus mollis neque eget augue posuere, at ornare purus blandit. Fusce pellentesque sapien sit amet mauris ullamcorper, ac placerat nisi venenatis. Cras quis risus vel odio fermentum laoreet ac in nunc. Suspendisse sagittis posuere ipsum quis sagittis. Nulla non lacus ut risus feugiat condimentum non lobortis urna. Sed id libero pharetra, sodales dui ut, aliquam ipsum. Maecenas a iaculis massa. Mauris ac interdum dui. Nullam non tortor et risus ornare commodo nec venenatis justo. Maecenas luctus, odio non vestibulum suscipit, nulla magna porttitor massa, vel ultrices risus magna sit amet augue. Proin at diam gravida, eleifend augue ut, vehicula neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam congue, risus sit amet cursus faucibus, odio sem ultrices risus, interdum semper urna lectus ac est. Nullam sed elit varius, auctor arcu et, imperdiet mi. Suspendisse sollicitudin nisi ac arcu auctor sagittis.",
//                     firstName: "Vincent",
//                     profileURL: "https://d292awxalydr86.cloudfront.net/Settings+page/Profile+photo+placeholder.png",
//                     createdAt: new Date()
//                 }
//             ]
//         }
//     }

//     render() {
//         return (
//             <div style={{height: "500px", width: "500px", background: "green", display: "flex", alignItems: "center", justifyContent: "center", color: ${ColorTheme.White.color}}}>Build page in here</div>
//         )
//     }
// }
export {};
