const mainTitle = document.querySelectorAll('.main__title a')
const mainTitlePages = document.querySelector('.main__title h2')
const navigate = document.querySelectorAll('.nav-list')
const about = document.querySelector(".about__body")
const how = document.querySelectorAll(".howw__body__main__item")
const howtitle = document.querySelector(".howw__body__title")
const categories = document.querySelectorAll(".category__body__item__left")
const footertext = document.querySelector(".footer-text")
const price = document.querySelectorAll(".product-head")
const aboutp = document.querySelector(".about-pg__body__item")
const galleryp = document.querySelectorAll(".gallery__body__item")
const contactsp = document.querySelector(".contacts-pg__body")

let eng = {
    "main": {
        "main-title": "More"
    },
    "productsPage":{
        "title":"Products"
    },
    "galleryPage":{
        "0":{
            "content":"Production"
        },
        "1":{
            "content":"Work process"
        },
        "2":{
            "content":"Finished products"
        },
    },
    "aboutPage":{
        "title":`<span class = "pr-title"> Prodenim </span> is one of the leading textile brands in Uzbekistan, which is engaged in the production of textile products, representing Uzbekistan on the world market since 2018.`,
        "title2":`<span class = "pr-title pr-title-sec"> Prodenim </span> operates in a cluster system and includes 3 main factories such as:`,
        "title3":`<span class = "bold"> (SST) Surxon Sifat Textile and (MST) Marokand Sifat Textile </span> which specialize in the production of high quality yarns.`,
        "title4":"Vision",
        "title5":"Worth",
        "text":`And the plant
        <span class = "bold"> (AJT) Afrasiab Jeans Textile </span> which produces a variety of denim fabrics using the most advanced technologies.`,
        "text1":"The integration of the cluster system allows us to better control the entire production process, which contributes to the production of high quality textile products.",
        "text2":`The company owns fields where cotton is grown and processed in order to continuously supply <span class = "pr-title"> Prodenim </span> with raw materials in the required volume for the production of yarn, fabric and consistently finished products. "High-quality raw materials are the key to high-quality finished products." Consistently this system allows us to guarantee outstanding quality for potential clients and partners.`,
        "text3":"The company has established partnerships with both local and foreign companies and exports to countries such as China, Bangladesh, Pakistan, Iran, Turkey, Russia, Belarus and other countries from Europe, Africa and Asia.",
        "text4":`<span class = "bold"> Mission </span> is to be one of the world's leading players specializing in the premium denim and yarn sector, and to manufacture products that fully comply with international standards, focus on the needs and requirements of customers and be competitive in the global market due to the best quality, the latest technology and constant innovation.`,
        "text5":"To produce world-class products that give our customers a competitive edge through superior quality and high value so that we can make our customers smile.",
        "text6":"Become the preferred partner in the denim and yarn sector, harnessing long-term growth opportunities and delivering outstanding value to all stakeholders.",
        "text7":"Achieve the required level of efficiency, reliability and validity.",
        "text8":`<span class = "bold"> Customer Satisfaction and Delight </span> - We put our customers' needs first and strive to add value by providing the highest quality products.`,
        "text9":`<span class = "bold"> Excellence in work </span> - we are highly professional in our work and relationships, and strive for continuous improvement in our pursuit of excellence.`,
        "text10":`<span class = "bold"> Committed to excellence </span> - We will use design thinking and technological innovation to deliver fast fashion to our clients.`,
        "text11":`<span class = "bold"> Ensuring a safe workplace and promoting healthy work habits </span> - we adhere to global standards of worker and human well-being to create efficient, healthy, happy and satisfied employees.`,
        "text12":`<span class = "bold"> Caring for the environment and the community </span> - we pay attention to what we create, how we create it and how it affects people and the environment.`
    },
    "nav":{
        "0":{"content":"Home"},
        "1":{"content":"Products"},
        "2":{"content":"About us"},
        "3":{"content":"Gallery"},
        "4":{"content":"Contacts"}
    },
    "form-inp":{
        "0":{"content":"Name"},
        "1":{"content":"Email"},
        "2":{"content":"Phone-number"},
        "3":{"content":"Message"},
    },
    "about": {
        "title": "About us",
        "content": "The Prodenim brand consists of three large textile companies, MST, SST and AJT, which specialize in the production of high quality products such as cotton yarns and denim. Maroqand Sifat Textile and Surxon Sifat Textile produce cotton yarn, while Afrasiab Jeans Textile is fully integrated into denim production. Prodenim is part of the Siyob group of companies, which has been operating in Uzbekistan since the early 2000s and is engaged in the supply of consumer goods."
    },
    "how": {
        "title": "How we work",
        "how-content": {
            "0": {
                "title": "Environmental sustainability",
                "content": "We care about the environment. Our main goal is to reduce the use of harmful chemicals and use more environmentally friendly chemicals instead. We try to save water resources as much as possible by using advanced production methods. Saving energy is also important, which is why we use advanced technologies that help us use less energy and minimize its consumption."
            },
            "1": {
                "title": "Using the Indigofer",
                "content": "We use an environmentally friendly dyeing chemical that inhibits Indigofer. This natural dye is less harmful to human skin."
            },
            "2": {
                "title": "Innovation and technology",
                "content": "To produce high quality products and increase productivity, we have integrated highly automated and high quality technologies that help us maintain industrial standards."
            },
            "3": {
                "title": "Quality",
                "content": "Quality and control is an important step in every industry. Thus, we are taking important steps to control it. Our laboratory is equipped with USTER, where we test and analyze every step of the production of cotton yarn."
            }
        },
    },
    "category":{
        "0":{
            "content":"The Surxon Sifat Textile factory was founded in 2018 which is located in the Surkhandarin region of Uzbekistan. The production capacity of the plant is focused on thorough cotton processing and yarn production. There are a total of 30144 pieces of spindles on the spinning mill that twist the yarns. The annual yarn production is in the region of 12,000 tons. The company employs 800 specialists, an impressive part of whom are young boys and girls. It specializes in the production of ring-spun combed and carded yarns in the range Ne 6/1-Ne 40/1. And also special yarns, including Slub in the range Ne 6/1-Ne 30/1."
        },
        "1":{
            "content":"Afrasiab Jeans Textile - founded in 2019 in the Samarkand region of Uzbekistan. The company is engaged in the production of denim fabrics consisting of cotton, polyester, lycra and Slub yarns. The daily production capacity is 65,000 meters of denim. Width range: 140 - 180 cm; Weight range: 6.5 - 14.5 oz. The production employs over 700 people. Export to Egypt, Russia and Turkey. Uses modern technologies from Germany, Belgium, Japan and the USA. Looms installed: Picanol and Toyota. Colors: blue, deep blue, medium blue, sea blue, black, black od black, blue od black, pure indigo."
        },
        "2":{
            "content":"The Maroqand Sifat Textile factory was founded in 2018 which is located in the Samarkand region of Uzbekistan. The production capacity of the plant is focused on thorough cotton processing and yarn production. In total, there are 23040 pieces of spindles on the spinning mill that twist the yarns. The annual yarn production is in the range of 8,000 tons. The company employs more than 600 specialists, an impressive part of whom are young men and women. Specializes in the production of Carded and Open End cotton yarns Ne 6/1-Ne 20/1. And also special yarns, including Slub in the range Ne 6/1-Ne 30/1, Lycra and Dual Core in the range Ne 6/1-Ne 20/1."
        },

    },
    "footer":{
        "content":`LET'S TALK ABOUT YOUR BUSINESS.\n
                  NEED MORE INFORMATION \n
                  OR DO YOU WANT TO CONTACT?`
    }
}

function changeLangRu(){
    localStorage.removeItem("on")
    window.location.reload()
}

function changeLangProd(){
    localStorage.setItem("on","English")

    mainTitlePages.innerHTML = eng.productsPage['title']
    navigate.forEach(i=>{
        i.querySelectorAll("li").forEach((e,index)=>{
            e.querySelector('a').innerHTML = eng.nav[index]['content']
        })
    })
    price.forEach(e=>{
        e.querySelector("p").innerHTML = "Download Price-List"
    })
    footertext.querySelector('h3').innerHTML = eng.footer['content']
}

function changeLangGal(){
    localStorage.setItem("on","English")
    mainTitlePages.innerHTML = "Gallery"

    galleryp.forEach((e,index)=>{
        e.querySelector("h3").innerHTML = eng.galleryPage[index]['content']
    })

    footertext.querySelector('h3').innerHTML = eng.footer['content']
}

function changeLangCon(){
    localStorage.setItem("on","English")
    mainTitlePages.innerHTML = "Contacts"

    contactsp.querySelector("h2").innerHTML = "Site"
    contactsp.querySelector(".btn-loc").innerHTML = "Send"

    contactsp.querySelectorAll(".loc-title").forEach(e=>{
        e.innerHTML = "Location"
    })
    contactsp.querySelectorAll(".loc-address").forEach(e=>{
        e.innerHTML = "Republic of Uzbekistan, Samarkand region, Okdaryo district, Yangi-Arik"
    })
    contactsp.querySelectorAll(".loc-wr").forEach(e=>{
        e.innerHTML = "Write / call"
    })

    contactsp.querySelectorAll(".for-inp").forEach((e,index)=>{
        e.setAttribute("placeholder",eng["form-inp"][index]["content"])
    })

    footertext.querySelector('h3').innerHTML = eng.footer['content']
}

function changeLangAbout(){
    localStorage.setItem("on","English")
    mainTitlePages.innerHTML = "About us"

    aboutp.querySelector("h2").innerHTML = "About us"
    aboutp.querySelector(".about-pg__title").innerHTML = eng.aboutPage['title']
    aboutp.querySelector(".about-pg__title2").innerHTML = eng.aboutPage['title2']
    aboutp.querySelector(".about-pg__title3").innerHTML = eng.aboutPage['title3']
    aboutp.querySelector(".about-pg__title4").innerHTML = eng.aboutPage['title4']
    aboutp.querySelector(".about-pg__title5").innerHTML = eng.aboutPage['title5']
    aboutp.querySelector(".about-pg__text").innerHTML = eng.aboutPage['text']
    aboutp.querySelector(".about-pg__text1").innerHTML = eng.aboutPage['text1']
    aboutp.querySelector(".about-pg__text2").innerHTML = eng.aboutPage['text2']
    aboutp.querySelector(".about-pg__text3").innerHTML = eng.aboutPage['text3']
    aboutp.querySelector(".about-pg__text4").innerHTML = eng.aboutPage['text4']
    aboutp.querySelector(".about-pg__text5").innerHTML = eng.aboutPage['text5']
    aboutp.querySelector(".about-pg__text6").innerHTML = eng.aboutPage['text6']
    aboutp.querySelector(".about-pg__text7").innerHTML = eng.aboutPage['text7']
    aboutp.querySelector(".about-pg__text8").innerHTML = eng.aboutPage['text8']
    aboutp.querySelector(".about-pg__text9").innerHTML = eng.aboutPage['text9']
    aboutp.querySelector(".about-pg__text10").innerHTML = eng.aboutPage['text10']
    aboutp.querySelector(".about-pg__text11").innerHTML = eng.aboutPage['text11']
    aboutp.querySelector(".about-pg__text12").innerHTML = eng.aboutPage['text12']

    footertext.querySelector('h3').innerHTML = eng.footer['content']
}

function changeLang() {

    localStorage.setItem("on","English")

    mainTitle.forEach(i => {
        i.innerHTML = eng.main["main-title"]
    })
    
    navigate.forEach(i=>{
        i.querySelectorAll("li").forEach((e,index)=>{
            e.querySelector('a').innerHTML = eng.nav[index]['content']
        })
    })
    about.querySelector("h1").innerHTML = eng.about["title"]
    about.querySelector("a").innerHTML = eng.main["main-title"]
    about.querySelector("p").innerHTML = eng.about["content"]
    about.querySelector(".a-img").innerHTML = `<div class="eng-text"><span class="bold">10</span> years of experience in the global market</div>`

    howtitle.querySelector("h2").innerHTML = eng.how["title"].toString()

    how.forEach((i, index) => {
        i.querySelector("h3").innerHTML = eng.how["how-content"][index]['title']
        i.querySelector("p").innerHTML = eng.how["how-content"][index]['content']
    })

    categories.forEach((i,index)=>{
        i.querySelector('p').innerHTML = eng.category[index]['content']
    })


    footertext.querySelector('h3').innerHTML = eng.footer['content']

    // window.location.reload()
    console.log(mainTitle);
}

function start(){
    let w = localStorage.getItem("on")

    if (w == "English"){
        changeLang()
    }
}

function startProd(){
    let w = localStorage.getItem("on")

    if (w == "English"){
        changeLangProd()
    }
}

function startAbout(){
    let w = localStorage.getItem("on")

    if (w == "English"){
        changeLangAbout()
    }
}

function startGallery(){
    let w = localStorage.getItem("on")

    if (w == "English"){
        changeLangGal()
    }
}
function startContact(){
    let w = localStorage.getItem("on")

    if (w == "English"){
        changeLangCon()
    }
}

start()