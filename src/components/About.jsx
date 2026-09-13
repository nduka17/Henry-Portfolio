const services=[

{
title:"Web Development",
text:"Building responsive websites and scalable applications using React, Tailwind CSS, PHP and modern technologies."
},

{
title:"App Development",
text:"Creating user friendly mobile and web applications with modern frameworks."
},


{
title:"API Integration",
text:"Developing secure APIs and connecting systems with payment and business platforms."
},


{
title:"Project Management",
text:"Planning, coordinating and delivering technology solutions."
},


{
title:"Mentorship",
text:"Sharing knowledge and helping developers improve their skills."
}


]


export default function About(){

return(

<section id="about"
className="py-20 px-6 max-w-6xl mx-auto">


<h2 className="text-4xl font-bold">
About Me
</h2>


<p className="text-gray-400 mt-6 leading-8">

Welcome to my portfolio. I am a Full Stack Developer
passionate about building reliable software solutions.
My experience covers frontend development, backend systems,
database management and API integration.

</p>



<div className="grid md:grid-cols-3 gap-6 mt-10">


{services.map(item=>(

<div className="bg-slate-900 p-6 rounded-xl">


<h3 className="text-cyan-400 text-xl font-bold">

{item.title}

</h3>


<p className="text-gray-400 mt-4">

{item.text}

</p>


</div>

))}


</div>


</section>

)

}