import reactLogo from '@/assets/React.webp'
import tailwindLogo from '@/assets/tailwind.png'
import reduxLogo from '@/assets/redux-logo-vector.svg'
import typescriptLogo from '@/assets/typescriptlogo.svg'
import javscriptLogo from '@/assets/JavaScript-logo.png'
import viteLogo from '@/assets/Vitejs-logo.svg.png'
import nextjsLogo from '@/assets/nextjs-icon-512x512-y563b8iq.png'
import htmllogo from '@/assets/html.png'
import csslogo from '@/assets/css-logo.png'
import vercelLogo from '@/assets/Vercel_favicon.svg'
import bitbucketlogo from '@/assets/bitbucketlogo.webp'
import githublogo from '@/assets/github.png'
import kanban from '@/assets/kanban.webp'
import invoice from '@/assets/invoice-manager.webp'
import Firebase from '@/assets/firebase.webp'
import eCommerce from '@/assets/eCommerceProject.png'
import sugma from '@/assets/sugma.png'
import expressJs from '@/assets/express.png'
import apexium from "@/assets/apexium.png"
import teekay from "@/assets/teekay.png"
import skinny from "@/assets/skinny.png"
import paul from "@/assets/Paulzack.jpg"
import ebenezer from "@/assets/niza2.jpg"
import teemi from "@/assets/timi.jpg"
import ayomide from "@/assets/ay.jpg"
import faith from "@/assets/faith.jpg"
import patience from "@/assets/PAT.jpg"
import phase3 from "@/assets/phase3.png"
import aClass from "@/assets/aClass.png"
import p1 from "@/assets/partner_one.png"
import p2 from "@/assets/desina.jpg"

const techstack = {
    "languages": [
        {
            image: htmllogo,
            name: "HTML",
            about: "Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages."
        },
        {
            image: csslogo,
            name: "CSS",
            about: "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML."
        },
        {
            image: vercelLogo,
            name: "Vercel",
            about: "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration."
        },
        {
            image: reactLogo,
            name: "React",
            about: "React is the library for web and native user interfaces."
        },
        {
            image: tailwindLogo,
            name: "Tailwind CSS",
            about: "Tailwind CSS is a utility-first CSS framework for building modern websites without ever leaving your HTML."
        },
        {
            image: typescriptLogo,
            name: "Typescript",
            about: "TypeScript extends JavaScript by adding types to the language."
        },
        {
            image: reduxLogo,
            name: "Redux",
            about: "Redux helps you write applications that behave consistently, run in different environments and are easy to test."
        },
        {
            image: nextjsLogo,
            name: "NextJS",
            about: "Next.js is a React framework that gives you building blocks to create web applications."
        },
        {
            image: expressJs,
            name: "ExpressJs",
            about: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. APIs."
        },
        {
            image: Firebase,
            name: "Firebase",
            about: "Firebase is a set of backend cloud computing services and application development platforms provided by Google."
        },
        {
            image: viteLogo,
            name: "Vite",
            about: "Vite JS is majorly used to set up a development environment for various frameworks like React and Vue etc."
        },
        {
            image: javscriptLogo,
            name: "JavaScript",
            about: "JS is a scripting language that enables you to create dynamically updating content, control multimedia, and so much more."
        },
        {
            image: githublogo,
            name: "Github",
            about: "Git is used to store the source code for a project and track the complete history of all changes to that code."
        },
        {
            image: bitbucketlogo,
            name: "Bitbucket",
            about: "Bitbucket Cloud is a Git-based code and CI/CD tool optimized for teams using Jira."
        },
        {
            image: htmllogo,
            name: "HTML",
            about: "Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages."
        },
        {
            image: csslogo,
            name: "CSS",
            about: "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML."
        },
        {
            image: vercelLogo,
            name: "Vercel",
            about: "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration."
        },
        {
            image: vercelLogo,
            name: "Vercel",
            about: "Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration."
        },
    ],
    "projects": [
        {
            image: kanban,
            title: "Kanban Task Manager",
            description: "This is a fully functional and responsive task management web application featuring a Kanban board. Users can easily add, edit and delete tasks and it also features a dark and light mode option",
            liveLink: "https://timi-kanban.vercel.app/",
            github: "https://github.com/TimiDev19/kanban",
            tech: "React, TypeScript, TailwindCSS, Redux",
            category: "management"
        },
        {
            image: sugma,
            title: "Sugma Airways Website",
            description: "This is a fully funtional and responsive web application that shows users a little bit about 'Sugma Airways' to serve as not only a buisness website but also an advertising opportunity.",
            liveLink: "https://sugma-airways.vercel.app/",
            github: "https://github.com/TimiDev19/SugmaAirways",
            tech: "NextJs, TailwindCSS, Framer Motion",
            category: "portfolio"
        },
        {
            image: apexium,
            title: "Apexium Agency Website",
            description: "This is a fully funtional and responsive website for a web3 agency, clearly stating various things about them mixing aesthetics with efficiency.",
            liveLink: "https://apexiumagency.com/",
            github: "https://github.com/TimiDev19/apexium",
            tech: "NextJs, TailwindCSS, Framer Motion",
            category: "portfolio"
        },
        {
            image: invoice,
            title: "Invoice Manager",
            description: "This is a fully functional and responsive invoice management web application that uses Firebase for both the Database and Authentication. It allows users to create, update and delete invoices and the addition of a dark and light mode feature all adds to the outstanding user experience.",
            liveLink: "https://timi-invoice-manager.vercel.app/",
            github: "https://github.com/TimiDev19/invoice-manager",
            tech: "React, Firebase, TailwindCSS, Redux",
            category: "management"
        },
        {
            image: teekay,
            title: "Teekay Bags Store",
            description: "This is a fully funtional and responsive ecommerce web application that allows users shop for bags from the comfort of their home. It features a cart where users can view edit and confirm their orders allowing a smooth and efficient user experience. The website features a fully functional online payment system using Stripe payment.",
            liveLink: "https://teekay-stores.vercel.app/",
            github: "https://github.com/TimiDev19/teekay-stores",
            tech: "NextJS, TailwindCSS, Stripe, ExpressJs",
            category: "ecommerce"
        },
        {
            image: eCommerce,
            title: "JMT Fashion Website",
            description: "This is a fully funtional and responsive ecommerce web application that allows users do shopping from the comfort of their home. It features a cart where users can view edit and confirm their orders allowing a smooth and efficient user experience. The items are all being pulled from an api.",
            liveLink: "https://ecommerce-oluwatimilehin.vercel.app/",
            github: "https://github.com/TimiDev19/ecommerce",
            tech: "React, TailwindCSS",
            category: "ecommerce"
        },
        {
            image: skinny,
            title: "$SKINNY",
            description: "This is a fully funtional and responsive website for a web3 memecoin project, clearly stating various things about them mixing aesthetics with efficiency.",
            liveLink: "https://skinnynigga.netlify.app/",
            github: "https://github.com/TimiDev19/SKINNY",
            tech: "NextJs, TailwindCSS, Framer Motion",
            category: "portfolio"
        },
    ],
    "team": [
        {
            image: paul,
            name: "Udah Paulzack E. M",
            role: "Mobile Developer"
        },
        {
            image: ebenezer,
            name: "Undie Ebenezer",
            role: "Senior software Developer"
        },
        {
            image: faith,
            name: "Ajiboye Faith Kehinde",
            role: "Lead UI/UX designer and graphic designer"
        },
        {
            image: teemi,
            name: "Oluwatimilehin Ayodeji Rotimi",
            role: "Full stack Developer"
        },
        {
            image: patience,
            name: "Omahi Patience Aricha",
            role: "Project Manager"
        },
        {
            image: ayomide,
            name: "Ayomide Christopher A",
            role: "Senior full stack Developer"
        }
    ],
    "clients": [
        {
            image: phase3
        },
        {
            image: aClass
        }
    ],
    "partners": [
        {
            image: p1,
            name: "AMUFU AGRO PROCESSING INDUSTRY"
        },
        {
            image: p2,
            name: "DESINA CAPITAL"
        }
    ]
}

export default techstack
