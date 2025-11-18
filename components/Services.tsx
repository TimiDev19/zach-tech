import Link from 'next/link'
import React from 'react'

type ServicesProps = {
    type: string;
};

const Services = ({ type }: ServicesProps) => {
    return (
        <div className=' min-h-[100vh] w-[100vw] overflow-x-hidden overflow-y-scroll text-[#000033] block text-justify'>
            {
                type === "web" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] w-[100vw] bg-white flex flex-col lg:flex-row items-center lg:justify-between '>
                    <div className=' text-justify w-full lg:w-[45%] h-[40%] lg:h-full flex flex-col items-start justify-center max-sm:mb-[20px]'>
                        <h1 className=' font-extrabold text-3xl lg:text-7xl mb-[10px]'>Web Development</h1>
                        <p className=' mb-[10px] text-justify w-full'>
                            <b>Your Website. Your Digital Empire. Your Success Story.</b> <br />
                            In today's digital-first world, your website isn't just an online presence, it's your 24/7 sales team, brand ambassador, and growth engine. We build stunning, high-performance websites that don't just look amazing they convert visitors into customers and grow your business while you sleep. <br />
                            From sleek corporate websites to powerful e-commerce platforms, we transform your vision into a digital reality that outshines your competition and delivers real ROI.
                        </p>
                        <p className=' mb-[10px]'>
                            <b>✨ What makes us different:</b> <br />
                            1. Lightning-fast loading speeds that keep visitors engaged. <br />
                            2. Mobile-responsive designs that work flawlessly on every device. <br />
                            3. SEO-optimized to rank higher on Google and attract organic traffic. <br />
                            4. Conversion-focused layouts that turn browsers into buyers. <br />
                            5. Ongoing support that keeps your site secure and up-to-date. <br /> <br />
                            <b>Ready to dominate your industry online?</b>
                        </p>
                        <Link
                            href={"/contact"}
                            className=' py-2 px-[20px] bg-[#000033] rounded-xl text-white hover:bg-transparent hover:text-[#000] transition-all duration-500'
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className=' w-full lg:w-[45%] h-[40vh] lg:h-[65vh] block mt-[20px] webDev-bg rounded-2xl'></div>
                </div>
            }

            {
                type === "ui" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] w-[100vw] bg-white flex flex-col lg:flex-row items-center lg:justify-between'>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-full flex flex-col items-start justify-center max-sm:mb-[20px]'>
                        <h1 className=' text-left font-extrabold text-3xl lg:text-7xl mb-2'>Ui/Ux Design</h1>
                        <p className=' mb-[10px] text-justify'>
                            <b className=' block'>Beautiful Designs That Make People Click, Buy & Come Back.</b>
                            Great design isn't just about making things pretty it's about creating experiences that users love, remember, and recommend. We blend psychology, aesthetics, and data to design interfaces that are not only visually stunning but also intuitive, accessible, and proven to convert.<br />
                            Every color choice, every button placement, every animation is strategically crafted to guide users effortlessly from curiosity to conversion. Because at the end of the day, good design isn't just seen it's felt, and it drives results.
                        </p>
                        <p className=' mb-[10px]'>
                            <b>🎨 Our design process includes:</b> <br />
                            1. Deep user research and competitor analysis. <br />
                            2. Strategic wireframing and information architecture. <br />
                            3. High-fidelity mockups that bring your vision to life. <br />
                            4. Interactive prototypes you can test before development. <br />
                            5. User testing and data-driven design iterations. <br />
                            6. Complete design systems and brand guidelines. <br />
                            7. Mobile, web, and app UI/UX expertise. <br /> <br />

                            <b>First impressions matter. Make yours unforgettable.</b>
                        </p>
                        <Link
                            href={"/contact"}
                            className=' py-2 px-[20px] bg-[#000033] rounded-xl text-white hover:bg-transparent hover:text-[#000] transition-all duration-500'
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className=' w-full lg:w-[45%] h-[40vh] lg:h-[65vh] flex flex-col items-start justify-center uiux-bg rounded-2xl'></div>
                </div>
            }

            {
                type === "graphics" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] w-[100vw] bg-white flex flex-col lg:flex-row items-center lg:justify-between'>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-full flex flex-col items-start justify-center max-sm:mb-[20px]'>
                        <h1 className=' text-left font-extrabold text-3xl lg:text-7xl mb-2'>Graphics Design</h1>
                        <p className=' mb-[10px]'>
                            <b>Visuals That Stop Scrolls, Spark Emotions & Sell Ideas.</b> <br />
                            In a world drowning in content, exceptional design is your secret weapon. We create bold, memorable visuals that cut through the noise whether it's a logo that becomes iconic, social media graphics that go viral, or marketing materials that convert like crazy.<br />
                            Every brand has a story. We make yours impossible to ignore. From startups needing their first brand identity to established businesses ready for a fresh look, we craft designs that don't just look good they work hard for your business.
                        </p>
                        <p className=' mb-[10px]'>
                            <b>✨ Design services that deliver:</b> <br />
                            1. Brand identity design (logos, color palettes, typography systems). <br />
                            2. Social media graphics that boost engagement. <br />
                            3. Marketing materials (flyers, brochures, banners, business cards). <br />
                            4. Product packaging and label design. <br />
                            5. Infographics that simplify complex ideas. <br />
                            6. Print and digital design in any format you need. <br />
                            7. Complete rebranding for businesses ready to level up. <br /> <br />

                            <b>Your brand deserves to be seen. Let's make it unforgettable.</b>
                        </p>
                        <Link
                            href={"/contact"}
                            className=' py-2 px-[20px] bg-[#000033] rounded-xl text-white hover:bg-transparent hover:text-[#000] transition-all duration-500'
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className=' w-full lg:w-[45%] h-[40vh] lg:h-[65vh] flex flex-col items-start justify-center graphics-bg rounded-2xl'></div>
                </div>
            }

            {
                type === "mobile" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] w-[100vw] bg-white flex flex-col lg:flex-row items-center lg:justify-between'>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-full flex flex-col items-start justify-center max-sm:mb-[20px]'>
                        <h1 className=' text-left font-extrabold text-3xl lg:text-7xl mb-2'>Mobile Development</h1>
                        <p className=' mb-[10px]'>
                            <b>Put Your Business in Every Customer's Pocket.</b> <br />
                            With over 150 million smartphone users in Nigeria and billions worldwide, mobile apps aren't the future they're the now. We craft powerful, intuitive mobile applications that keep your customers engaged, boost loyalty, and open new revenue streams you never knew existed.<br />
                            Whether you need a stunning consumer app, a robust enterprise solution, or a game-changing startup MVP, we build cross-platform apps that work seamlessly on both iOS and Android saving you time and money while maximizing your reach.
                        </p>
                        <p className=' mb-[10px]'>
                            <b>📱 What we deliver:</b> <br />
                            1. Native iOS and Android apps that feel premium and polished <br />
                            2. Cross-platform solutions (Flutter, React Native) for faster deployment <br />
                            3. Seamless integration with payment systems, APIs, and cloud services <br />
                            4. App Store and Google Play optimization and publishing <br />
                            5. Push notifications, analytics, and features that drive engagement <br />
                            6. Post-launch support and updates to keep your app competitive <br /> <br />

                            <b>Your customers are on their phones. Are you?.</b>
                        </p>
                        <Link
                            href={"/contact"}
                            className=' py-2 px-[20px] bg-[#000033] rounded-xl text-white hover:bg-transparent hover:text-[#000] transition-all duration-500'
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className=' w-full lg:w-[45%] h-[40vh] lg:h-[65vh] flex flex-col items-start justify-center mobile-bg rounded-2xl'></div>
                </div>
            }

            {
                type === "backend" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] w-[100vw] bg-white flex flex-col lg:flex-row items-center lg:justify-between'>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-full flex flex-col items-start justify-center max-sm:mb-[20px]'>
                        <h1 className=' text-left font-extrabold text-3xl lg:text-7xl mb-2'>Backend Development</h1>
                        <p className=' mb-[10px]'>
                            <b>The Invisible Power Behind Every Great Digital Experience.</b> <br />
                            Your users never see it, but your backend is the engine that powers everything from processing payments to managing millions of users, from securing sensitive data to delivering lightning-fast performance. We build robust, scalable backend systems that handle complexity effortlessly so your business can grow without limits.<br />
                            Think of us as the architects building an unshakeable foundation beneath your digital empire secure, efficient, and ready to scale from hundreds to millions of users without breaking a sweat.
                        </p>
                        <p className=' mb-[10px]'>
                            <b>⚙️ What we engineer:</b> <br />
                            1. High-performance APIs and server-side applications. <br />
                            2. Secure database design and optimization (SQL, NoSQL, MongoDB). <br />
                            3. Cloud infrastructure setup and management (AWS, Azure, Google Cloud). <br />
                            4. Payment gateway integration (Paystack, Flutterwave, Stripe). <br />
                            5. Authentication systems and enterprise-grade security. <br />
                            6. Server migration, optimization, and ongoing maintenance. <br />
                            7. Real-time features, webhooks, and third-party integrations <br /> <br />

                            <b>Your business runs on data. We make it run smoothly.</b>
                        </p>
                        <Link
                            href={"/contact"}
                            className=' py-2 px-[20px] bg-[#000033] rounded-xl text-white hover:bg-transparent hover:text-[#000] transition-all duration-500'
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className=' w-full lg:w-[45%] h-[40vh] lg:h-[65vh] flex flex-col items-start justify-center backend-bg rounded-2xl'></div>
                </div>
            }

            {
                type === "fullstack" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] w-[100vw] bg-white flex flex-col lg:flex-row items-center lg:justify-between'>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-full flex flex-col items-start justify-center max-sm:mb-[20px]'>
                        <h1 className=' text-left font-extrabold text-3xl lg:text-7xl mb-2'>Full Stack Development</h1>
                        <p className=' mb-[10px]'>
                            <b>Complete Solutions. From Idea to Launch. One Expert Team.</b> <br />
                            Why juggle multiple vendors when you can have one powerhouse team that handles everything? We're full-stack specialists meaning we build your entire digital product from the ground up: beautiful frontends users love, powerful backends that handle anything you throw at them, and everything in between.<br />
                            From concept to deployment, we're your single source of truth faster timelines, seamless integration, unified vision, and no finger-pointing when things need fixing. Just one team obsessed with turning your idea into a thriving digital product.
                        </p>
                        <p className=' mb-[10px]'>
                            <b>🚀 End-to-end expertise:</b> <br />
                            1. Complete web application development <br />
                            2. Frontend + Backend seamlessly integrated <br />
                            3. Database design, API development, and cloud deployment <br />
                            4. Responsive design across all devices <br />
                            5. Payment systems, user authentication, and admin dashboards <br />
                            6. Testing, debugging, and quality assurance <br />
                            7. Launch strategy and ongoing support <br /> <br />

                            <b>One vision. One team. Infinite possibilities.</b>
                        </p>
                        <Link
                            href={"/contact"}
                            className=' py-2 px-[20px] bg-[#000033] rounded-xl text-white hover:bg-transparent hover:text-[#000] transition-all duration-500'
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className=' w-full lg:w-[45%] h-[40vh] lg:h-[65vh] flex flex-col items-start justify-center fs-bg rounded-2xl'></div>
                </div>
            }

            {
                type === "data" &&
                <div className=' pt-[85px] p-[2.5%] min-h-[100vh] w-[100vw] bg-white flex flex-col lg:flex-row items-center lg:justify-between'>
                    <div className=' w-full lg:w-[45%] h-[40%] lg:h-full flex flex-col items-start justify-center max-sm:mb-[20px]'>
                        <h1 className=' text-left font-extrabold text-3xl lg:text-7xl mb-2'>Data Analysis & Business Intelligence</h1>
                        <p className=' mb-[10px]'>
                            <b>Turn Your Data Into Your Competitive Advantage.</b> <br />
                            Your business generates tons of data every day customer behavior, sales patterns, market trends but are you actually using it to make smarter decisions? We transform raw data into crystal clear insights that reveal opportunities you didn't know existed and help you make decisions with confidence, not guesswork.<br />
                            Stop flying blind. Start making data-driven decisions that accelerate growth, optimize operations, and give you an unfair advantage over competitors still relying on intuition alone.
                        </p>
                        <p className=' mb-[10px]'>
                            <b>📊 What we unlock for you:</b> <br />
                            1. Custom dashboards and visual reports you can actually understand. <br />
                            2. Predictive analytics to forecast trends and plan ahead. <br />
                            3. Customer behavior analysis to improve marketing ROI. <br />
                            4. Sales and performance tracking with actionable insights. <br />
                            5. Data cleaning, organization, and automation. <br />
                            6. Excel, Power BI, Python, and SQL expertise. <br />
                            7. Training your team to become data-literate <br /> <br />

                            <b>Stop guessing. Start knowing. Make data your superpower.</b>
                        </p>
                        <Link
                            href={"/contact"}
                            className=' py-2 px-[20px] bg-[#000033] rounded-xl text-white hover:bg-transparent hover:text-[#000] transition-all duration-500'
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className=' w-full lg:w-[45%] h-[40vh] lg:h-[65vh] flex flex-col items-start justify-center fs-bg rounded-2xl'></div>
                </div>
            }


            <div className=' min-h-[100vh] w-[100vw] bg-white pt-[90px] px-[2.5%]'>
                <h1 className=' font-extrabold text-3xl lg:text-7xl mb-[50px] text-center'>Our Process</h1>
                <div className=' w-full grid grid-cols-1 lg:grid-cols-3 mb-[20px]'>
                    <div className=' mx-2'>
                        <div className=' text-white h-[50px] w-[50px] flex items-center justify-center bg-[#000033] rounded-full font-extrabold mb-[10px]'>1</div>
                        <h1 className=' font-extrabold text-xl mb-[5px]'>Strategic Consultation</h1>
                        <p>
                            We kick off with a strategic consultation to understand your brand, goals, and audience.
                        </p>
                    </div>

                    <div className=' mx-2'>
                        <div className=' text-white h-[50px] w-[50px] flex items-center justify-center bg-[#000033] rounded-full font-extrabold mb-[10px]'>2</div>
                        <h1 className=' font-extrabold text-xl mb-[5px]'>Collaboration</h1>
                        <p>
                            We collaborate closely to ensure the end result meets your expectations and makes you happy.
                        </p>
                    </div>

                    <div className=' mx-2'>
                        <div className=' text-white h-[50px] w-[50px] flex items-center justify-center bg-[#000033] rounded-full font-extrabold mb-[10px]'>3</div>
                        <h1 className=' font-extrabold text-xl mb-[5px]'>Delivery</h1>
                        <p>
                            Our delivery rate is 100%; our clients deserve nothing less.
                        </p>
                    </div>
                </div>
                <div className=' w-[90%] h-[50vh] border border-[#EEAD0E] mx-auto flex flex-col items-center justify-center'>
                    <h1 className=' font-semibold text-3xl lg:text-5xl text-center'>Read to build something great?</h1>
                    <Link
                        href={"/contact"}
                        className=' text-white py-2 px-[20px] bg-[#000033] rounded-xl hover:bg-transparent hover:text-[#000033] transition-all duration-500'
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Services