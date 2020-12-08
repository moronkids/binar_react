import React from "react"
import styles from "../../assets/css/all.module.css"
import compute from "../../assets/css/compute.jpg"
import process from "../../assets/css/creative_process.png"
import processcode from "../../assets/css/code_development_.png"
import profile from "../../assets/css/profile_analysis_.png"
const about = () => {
  return (
    <>
      <main>
        <img
          src={process}
          alt=""
          srcset=""
          className="hidden md:block w-96 flex absolute top-2/4 -left-20 -z-10 md:w-52 lg:w-96"
        />
        <img
          src={processcode}
          alt=""
          srcset=""
          className="hidden md:block w-96 flex absolute -bottom-1/4 -right-20 -z-10 md:w-52 lg:w-96"
        />
        <img
          src={profile}
          alt=""
          srcset=""
          className="hidden md:block  flex absolute -bottom-3/4 -left-20 -z-10 md:w-52 lg:w-96"
        />
        <div class="block md:flex">
          <div class="sm:w-screen md:w-1/4 m-3">
            <div class="w-100 h-100 col-md-12">
              {/* <div class="roundedx  -c mx-auto"></div> */}
              <div class="flex justify-center ...">
                <div
                  className={`${styles.roundedx}` + " inline-block align-middle m-2"}
                ></div>
              </div>
              <div class="mx-auto pt-4 text-center mb-3">
                <h3>Sulistyo Ardani</h3>
                <h6>Frontend Developer</h6>
              </div>
            </div>
            <div class="flex mb-4">
              <a
                class="mx-auto"
                href="http://github.com/moronkids"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.roundedgithub}></div>
              </a>
              <a
                class="mx-auto"
                href="http://https://www.linkedin.com/in/sulistyo-ardani-a30059179/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.roundedlinkedin}></div>
              </a>
              <a
                class="mx-auto"
                href="http://instagram.com/thirteen.jan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.roundedreact}></div>
              </a>
              <a
                class="mx-auto"
                href="http://https://www.facebook.com/SulistyoArdani"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.roundednetlify}></div>
              </a>
            </div>
          </div>
          <hr class="style-one d-block d-sm-none" />
          <div class="sm:w-full md:w-3/4 m-4">
            <div class="text-left pb-2">
              <h4>
                <strong>Summary :</strong>
              </h4>
            </div>
            <div className="">
              <div className="float-right w-0 h-24"></div>
              {/* <div style="float: right; clear: right"> */}
              <div className="float-right clear-right">
                <img src={compute} className="w-64" alt="" srcset="" />
              </div>

              <p>
                Halo! Perkenalkan namaku Sulistyo Ardani. Seorang laki-laki berumur
                24 tahun, memiliki profesi sebagai Software Engineer dengan
                kompetensi spesifik sebagai Frontend Developer. Menjadi seorang
                Software Engineer bukanlah jalan yang mudah, karena diperjalanan nya
                dipenuhi lika-liku. Berawal dari melihat teman yang bekerja remote
                dari rumah kos adalah awal ketertarikan terhadap Software Engineer.
                Semster 7 pertengahan saat sedang mengerjakan skripsi akhirnya aku
                memutuskan untuk belajar secara mandiri. Bahasa pemrograman yang
                pertamakali saya pelajari adalah Python dengan framework Django.
                Sampai akhirnya saya diterima magang kemudian bekerja selama satu
                tahun di startup Surbaya di bidang fintech. Dan setelah bekerja
                selama lebih dari setahun saya memutuskan untuk resign dan mengikuti
                programm dari Glints x Binar agar menambah kompetensi saya dan
                tentunya relasi!
              </p>
            </div>
          </div>
        </div>

        <hr className="style-one" />
        <div
          className="  pt-2 row d-flex text-left mb-4
        "
        >
          <div className="ml-3 md:m-0 text-left pb-2 w-100">
            <h4>
              <strong>Education :</strong>
            </h4>
          </div>
          <div className="block md:flex m-3 text-center md:text-left">
            <div className="w-full mx-auto rounded-lg bg-white shadow p-5 text-gray-800 sm:w-full md:w-1/4 m-4 mt-0">
              <div className={styles.glints + " mb-4"}></div>
              <h5>Glints Academy Batch 9 (Powered By Binar)</h5>
              <h6>
                <b>Frontend Developer</b>
              </h6>
              <h7>(November 2020 - Februari 2021)</h7>
              {/* <hr className="style-one d-block d-sm-none" /> */}
            </div>
            <div className="md:ml-3 sm:w-full md:w-3/4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
              cumque magni ad incidunt pariatur non tempore quasi quam nam impedit
              reiciendis perspiciatis, perferendis vero sint debitis, ipsum ipsa
              necessitatibus adipisci. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur culpa, rem in maiores autem laborum
              itaque, saepe, modi obcaecati iure fuga repellendus iusto corrupti
              eligendi hic nesciunt aliquid distinctio esse! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Temporibus quam incidunt, sint ut
              soluta beatae perferendis numquam mollitia quisquam debitis sunt
              provident rem corporis enim non minima! Repellat, dicta vitae!
            </div>
          </div>

          <div className="m-3 block md:flex">
            <div className="w-full mx-auto rounded-lg bg-white shadow p-5 text-gray-800 sm:w-full md:w-1/4 m-4 mt-0">
              {/* <div className="amikom m-4"></div> */}
              <div className={styles.amikom + " mb-4"}></div>
              <h5>Universitas Amikom Yogyakarta</h5>
              <h6>
                <b>Frontend Developer</b>
              </h6>
              <h7>(November 2020 - Februari 2021)</h7>
              {/* <hr className="style-one d-block d-sm-none" /> */}
            </div>
            <div className="md:ml-3 sm:w-full md:w-3/4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
              cumque magni ad incidunt pariatur non tempore quasi quam nam impedit
              reiciendis perspiciatis, perferendis vero sint debitis, ipsum ipsa
              necessitatibus adipisci. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Aspernatur culpa, rem in maiores autem laborum
              itaque, saepe, modi obcaecati iure fuga repellendus iusto corrupti
              eligendi hic nesciunt aliquid distinctio esse! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Temporibus quam incidunt, sint ut
              soluta beatae perferendis numquam mollitia quisquam debitis sunt
              provident rem corporis enim non minima! Repellat, dicta vitae!
            </div>
          </div>
        </div>
        <hr className="style-one" />
        <div className="  pt-2">
          <div className="ml-3 md:m-0 text-left pb-2 w-100">
            <h4>
              <strong>Expertise :</strong>
            </h4>
          </div>
        </div>
        <div className="  pt-2 grid md:grid-cols-3 grid-cols-1">
          <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 m-6">
            <div className="flex justify-center md:justify-end -mt-16">
              <img
                className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                src="data:image/png;base64,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"
              />
            </div>
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold">React JS</h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
                deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
                commodi hic, suscipit in a veritatis pariatur minus consequuntur!
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <a href="#" className="text-xl font-medium text-indigo-500">
                John Doe
              </a>
            </div>
          </div>
          <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 m-6">
            <div className="flex justify-center md:justify-end -mt-16">
              <img
                className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdJ72vNmlStFe_RjRJHXBYkpmsbCEpqDy20g&usqp=CAU"
              />
            </div>
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold">Node JS</h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
                deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
                commodi hic, suscipit in a veritatis pariatur minus consequuntur!
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <a href="#" className="text-xl font-medium text-indigo-500">
                John Doe
              </a>
            </div>
          </div>
          <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 m-6">
            <div className="flex justify-center md:justify-end -mt-16">
              <img
                className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                src="https://pbs.twimg.com/profile_images/1163911054788833282/AcA2LnWL_400x400.jpg"
              />
            </div>
            <div>
              <h2 className="text-gray-800 text-3xl font-semibold">Laravel</h2>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores
                deserunt ea doloremque natus error, rerum quas odio quaerat nam ex
                commodi hic, suscipit in a veritatis pariatur minus consequuntur!
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <a href="#" className="text-xl font-medium text-indigo-500">
                John Doe
              </a>
            </div>
          </div>
        </div>

        <hr className="style-one" />
        <div className="  pt-2 row d-flex text-left mb-4">
          <div className="text-left pb-2 w-100 pl-0 pr-0">
            <h4>
              <strong>Experience :</strong>
            </h4>
          </div>
          <div className="pl-0 col-md-3 pl-0 pr-3 pt-3 pt-sm-0">
            <h5>Vascomm</h5>
            <h6>
              <b>Frontend Developer</b>
            </h6>
            <h7>(September 2019 - October 2020)</h7>
          </div>
          <div className="col-md-9 pl-0 pr-0 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            cumque magni ad incidunt pariatur non tempore quasi quam nam impedit
            reiciendis perspiciatis, perferendis vero sint debitis, ipsum ipsa
            necessitatibus adipisci. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur culpa, rem in maiores autem laborum itaque,
            saepe, modi obcaecati iure fuga repellendus iusto corrupti eligendi hic
            nesciunt aliquid distinctio esse! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus quam incidunt, sint ut soluta beatae
            perferendis numquam mollitia quisquam debitis sunt provident rem corporis
            enim non minima! Repellat, dicta vitae!
          </div>
          <div className="pl-0 col-md-3 pl-0 pr-3 pt-3 pt-sm-0">
            <h5>Gama Informatika</h5>
            <h6>
              <b>Backend Developer</b>
            </h6>
            <h7>(maret 2019 - agustus 2019)</h7>
          </div>
          <div className="col-md-9 pl-0 pr-0 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            cumque magni ad incidunt pariatur non tempore quasi quam nam impedit
            reiciendis perspiciatis, perferendis vero sint debitis, ipsum ipsa
            necessitatibus adipisci. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur culpa, rem in maiores autem laborum itaque,
            saepe, modi obcaecati iure fuga repellendus iusto corrupti eligendi hic
            nesciunt aliquid distinctio esse! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus quam incidunt, sint ut soluta beatae
            perferendis numquam mollitia quisquam debitis sunt provident rem corporis
            enim non minima! Repellat, dicta vitae!
          </div>
          <div className="pl-0 col-md-3 pl-0 pr-3 pt-3 pt-sm-0">
            <h5>Remote Worker ID</h5>
            <h6>
              <b>Member</b>
            </h6>
            <h7>(maret 2018 - now)</h7>
          </div>
          <div className="col-md-9 pl-0 pr-0 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            cumque magni ad incidunt pariatur non tempore quasi quam nam impedit
            reiciendis perspiciatis, perferendis vero sint debitis, ipsum ipsa
            necessitatibus adipisci. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur culpa, rem in maiores autem laborum itaque,
            saepe, modi obcaecati iure fuga repellendus iusto corrupti eligendi hic
            nesciunt aliquid distinctio esse! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus quam incidunt, sint ut soluta beatae
            perferendis numquam mollitia quisquam debitis sunt provident rem corporis
            enim non minima! Repellat, dicta vitae!
          </div>
          <div className="pl-0 col-md-3 pl-0 pr-3 pt-3 pt-sm-0">
            <h5>KAWULA MUDA PONOWAREN (KMP)</h5>
            <h6>
              <b>Ketua Pemuda</b>
            </h6>
            <h7>(September 2017 - Januari 2020)</h7>
          </div>
          <div className="col-md-9 pl-0 pr-0 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            cumque magni ad incidunt pariatur non tempore quasi quam nam impedit
            reiciendis perspiciatis, perferendis vero sint debitis, ipsum ipsa
            necessitatibus adipisci. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Aspernatur culpa, rem in maiores autem laborum itaque,
            saepe, modi obcaecati iure fuga repellendus iusto corrupti eligendi hic
            nesciunt aliquid distinctio esse! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus quam incidunt, sint ut soluta beatae
            perferendis numquam mollitia quisquam debitis sunt provident rem corporis
            enim non minima! Repellat, dicta vitae!
          </div>
        </div>
        <hr className="style-one" />
        <div className="  pt-2 row d-flex text-left mb-4">
          <div className="text-left pb-2 w-100 pl-0 pr-0">
            <h4>Portofolio :</h4>
            <div className="flipster ctrx">
              <ul className="ctr">
                <a target="_blank" href="https://demo.bankplus.id">
                  <li>
                    <img src="assets/css/pf1.png" alt="" />
                  </li>
                </a>
                <a
                  href="http://moronkids.github.io/todolist/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <img src="assets/css/pf2.png" alt="" />
                  </li>
                </a>
                <a
                  href="http://burger-reactjs.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <img src="assets/css/pf3.png" alt="" />
                  </li>
                </a>
                <a
                  href="http://skripsi-deploy.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <img src="assets/css/pf4.png" alt="" />
                  </li>
                </a>
                <a
                  href="http://bankplus-setup.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li>
                    <img src="assets/css/pf5.png" alt="" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        {/* <hr className="style-one"/> */}
        <div className="  pt-2 row d-flex text-left mb-4">
          <div className="text-left pb-2 w-100 pl-0 pr-0"></div>
        </div>
      </main>
    </>
  )
}

export default about
