import Header from "./Desktop-components/Header"
import View1 from "./Desktop-components/View1"
import View2 from "./Desktop-components/View2"
import View3 from "./Desktop-components/View3"
import View4 from "./Desktop-components/View4"
import View5 from "./Desktop-components/View5"
import "./Home.css"

function HomeDesktop() {
    return (
        <div id="all">
            <div id="head">
                <Header />
            </div>
            <View1 />
            <View2 />
            <View3 />
            <View4 />
            <View5 />
        </div>
    )
}

export default HomeDesktop;
