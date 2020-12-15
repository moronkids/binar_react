import React, { useState, useEffect } from "react"
import axios from "axios"
const fetchGithub = () => {
  const [data, setData] = useState({
    loading: false, //ini untuk ux user experience agar user tahu bahwa sistem sedang berjalan/ loading
    repo: [], //data
  })

  useEffect(
    // ini tempat pemanggilan api -> componentDidMount
    () => {
      setData({ loading: true }) // conditional useEffect
      axios // syntax axios dimulai berisfat async
        .get("https://api.github.com/users/moronkids/repos") //method get milik axios untuk mengambil data
        .then((
          repo //kemudian saat berhasil data diambil akan dipassing dengan nama variabel repo
        ) =>
          repo.data.map((data) => ({
            // repo dilakukan mapping ulang dengan kebutuhan value kita
            name: `${data.name}`,
            url: `${data.url}`,
            desc: `${data.desc}`,
            createdAt: `${data.created_at}`,
            updatedAt: `${data.update_at}`,
            cloneUrl: `${data.clone_url} `,
            ssh: `${data.ssh_url} `,
          }))
        )
        .then((
          res // melakukan perubahan data state menggunakan setData
        ) =>
          setData({
            loading: false,
            repo: res,
          })
        )
    },
    [setData] // ini conditial untuk useEffect jadi akan mengikuti yang paling atas
  )

  return (
    <React.Fragment>
      {console.log(data, "GITHUBBB")}
      {data.loading ? (
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
      ) : (
        Object.keys(data.repo).map((keyName, i, arr) => (
          <>
            {/* <div className="box-content">
              <table className="table-auto">
                <thead>
                  <th>Prop</th>
                  <th>Detail</th>
                </thead>
                <tbody>
                  <td>
                    <tr>Name</tr>
                    <tr>Url</tr>
                    <tr>Desc</tr>
                    <tr>Created At</tr>
                    <tr>Updated At</tr>
                    <tr>Clone Url</tr>
                    <tr>Clone SSH</tr>
                    <tr></tr>
                  </td>
                  <td>
                    <tr>{data.repo[keyName]["name"]}</tr>
                    <tr>{data.repo[keyName]["url"]}</tr>
                    <tr>{data.repo[keyName]["desc"]}</tr>
                    <tr>{data.repo[keyName]["createdAt"]}</tr>
                    <tr>{data.repo[keyName]["updatedAt"]}</tr>
                    <tr>{data.repo[keyName]["cloneUrl"]}</tr>
                    <tr>{data.repo[keyName]["ssh"]}</tr>
                    <tr></tr>
                  </td>
                </tbody>
              </table>
            </div> */}
            <div>
              <span className="text-md font-bold">Name</span> :{" "}
              {data.repo[keyName]["name"]}
            </div>
            <div>
              <span className="text-md font-bold">Url</span> :
              {data.repo[keyName]["url"]}
            </div>
            <div>
              <span className="text-md font-bold">Desc</span> :
              {data.repo[keyName]["desc"]}
            </div>
            <div>
              <span className="text-md font-bold">Created At</span> :{" "}
              {data.repo[keyName]["createdAt"]}
            </div>
            <div>
              <span className="text-md font-bold">Update At</span> :{" "}
              {data.repo[keyName]["updatedAt"]}
            </div>
            <div>
              <span className="text-md font-bold">Clone url</span> :
              {data.repo[keyName]["cloneUrl"]}
            </div>
            <div>
              <span className="text-sm font-bold">SSH</span> :{" "}
              {data.repo[keyName]["ssh"]}
            </div>
            <br />
          </>
        ))
      )}
      {console.log(data.repo, "GITHUBBBx")}
    </React.Fragment>
  )
  //   return <div>{console.log(data, "rest")}</div>
}

export default fetchGithub
