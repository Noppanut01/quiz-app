import { Component } from "react"
import "./products.css"

class Products extends Component {
    data = [
        ["React", 500],
        ["React Native", 600],
        ["Node.js", 450],
        ["MongoDB", 300],
        ["Express.js", 650],
    ]
    render() {
        return (
            <table border="1">
                <tr><th>ชื่อ</th><th>ราคา</th></tr>
                {this.data.map(d => {
                    return <tr><td>{d[0]}</td><td>{d[1]}</td></tr>
                })}
            </table >
        )
    }
}
export default Products