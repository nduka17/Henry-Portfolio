const skills=[

"JavaScript",
"React.js",
"Tailwind CSS",
"HTML",
"CSS",
"PHP",
"MySQL",
"MySQLi",
"Git",
"GitHub",
"REST API",
"Paystack API"

]


export default function Skills(){

return(

<section id="skills"
className="py-20 bg-slate-900 px-6">


<div className="max-w-6xl mx-auto">


<h2 className="text-4xl font-bold">
Skills
</h2>


<div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">


{skills.map(skill=>(

<div className="bg-slate-800 p-5 rounded-xl text-center">

{skill}

</div>

))}


</div>


</div>


</section>

)

}