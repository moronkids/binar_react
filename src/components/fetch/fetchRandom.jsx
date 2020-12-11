import Axios from "axios"
import React, { Component } from "react"
// import "./style.css"
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      china: [],
      turkey: [],
      jerman: [],
    }
  }

  componentDidMount() {
    // < -------Using api------ >

    // fetch("https://randomuser.me/api/?results=5&nat=DE")
    //   .then((res) => res.json())
    //   //   .then((parsedJSON) => console.log(parsedJSON, "testing"))
    //   .then((parsedJSON) =>
    //     parsedJSON.results.map((data) => ({
    //       id: `${data.id}`,
    //       firstName: `${data.name.first}`,
    //       lastName: `${data.name.last}`,
    //       location: `${data.location.country}`,
    //       //   location: `${data.location.city} - ${data.location.country}`,
    //       thumbnail: `${data.picture.thumbnail}`,
    //     }))
    //   )
    //   .then((items) =>
    //     this.setState({
    //       jerman: items,
    //     })
    //   )
    //   .catch((error) => console.log("parsing data is failed", error))

    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      //   .then((parsedJSON) => console.log(parsedJSON, "testing"))
      .then((parsedJSON) =>
        parsedJSON.results.map((data) => ({
          id: `${data.id}`,
          firstName: `${data.name.first}`,
          lastName: `${data.name.last}`,
          location: `${data.location.city} - ${data.location.country}`,
          loc: `${data.location.country}`,
          email: `${data.email} `,
          gender: `${data.gender} `,
          phone: `${data.phone} `,
          thumbnail: `${data.picture.thumbnail}`,
        }))
      )
      .then((items) =>
        this.setState({
          items: items,
        })
      )
      //   .catch((error) => console.log("parsing data is failed", error))

      // fetch("https://randomuser.me/api/?results=5&nat=NZ")
      //   .then((res) => res.json())
      //   //   .then((parsedJSON) => console.log(parsedJSON, "testing"))
      //   .then((parsedJSON) =>
      //     parsedJSON.results.map((data) => ({
      //       id: `${data.id}`,
      //       firstName: `${data.name.first}`,
      //       lastName: `${data.name.last}`,
      //       location: `${data.location.country}`,
      //       //   location: `${data.location.city} - ${data.location.country}`,
      //       thumbnail: `${data.picture.thumbnail}`,
      //     }))
      //   )
      //   .then((items) =>
      //     this.setState({
      //       turkey: items,
      //     })
      //   )
      //   .catch((error) => console.log("parsing data is failed", error))

      // < -------Using api------ >
      // < -------Using manual filter and axios------ >

      // < -------Using manual filter and axios------ >
      .catch((error) => console.log("parsing data is failed", error))
  }

  render() {
    const { items } = this.state
    const { jerman } = this.state
    const { turkey } = this.state

    return (
      <div>
        <div className="text-lg grid-cols-1 font-semibold ">
          <span className="">Random List</span>
        </div>
        <hr />
        <div className="flex justify-center boxWhite grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-8 gap-2">
          {items.length > 0 ? (
            items.map((item) => {
              const {
                id,
                firstName,
                lastName,
                location,
                thumbnail,
                email,
                gender,
                phone,
              } = item
              return (
                <div className="h-56 py-4 px-3 bg-white shadow-lg rounded-lg my-10 ">
                  <div className="flex justify-center md:justify-end -mt-16">
                    <img
                      className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                      src={thumbnail}
                    />
                  </div>
                  <div class="break-all">
                    <h2 className="text-gray-800 text-lg font-semibold">
                      {firstName + " " + lastName}
                    </h2>
                    <h1 className="text-gray-800 text-sm font-semibold">
                      {location}
                    </h1>
                    <h1 className="text-gray-800 text-sm font-semibold">{email}</h1>
                    <h1 className="text-gray-800 text-sm font-semibold">{gender}</h1>
                    <h1 className="text-gray-800 text-sm font-semibold">{phone}</h1>

                    <p className="mt-2 text-gray-600"></p>
                  </div>
                  <div className="flex justify-end mt-4"></div>
                </div>
              )
            })
          ) : (
            <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-blue-400 h-12 w-12"></div>
                <div class="flex-1 space-y-4 py-1">
                  <div class="h-4 bg-blue-400 rounded w-3/4"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-blue-400 rounded"></div>
                    <div class="h-4 bg-blue-400 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
