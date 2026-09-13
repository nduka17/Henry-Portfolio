import {
Home as HomeIcon,
Code,
Briefcase,
Music as MusicIcon,
Mail
} from "lucide-react";


export default function Navbar(){

return(

<nav className="fixed bottom-5 left-1/2 -translate-x-1/2 
bg-slate-900 border border-slate-500 rounded-2xl
px-5 py-4 z-50">

<div className="flex gap-5">


<a href="#home"
className="bg-slate-700 p-4 rounded-xl flex flex-col items-center">
<HomeIcon size={20}/>
<span className="text-xs">Home</span>
</a>


<a href="#skills"
className="bg-slate-700 p-4 rounded-xl flex flex-col items-center">
<Code size={20}/>
<span className="text-xs">Skills</span>
</a>



<a href="#work"
className="bg-slate-700 p-4 rounded-xl flex flex-col items-center">
<Briefcase size={20}/>
<span className="text-xs">Work</span>
</a>



{/* <a href="#music"
className="bg-slate-700 p-4 rounded-xl flex flex-col items-center">
<MusicIcon size={20}/>
<span className="text-xs">Music</span>
</a> */}



<a href="#contact"
className="bg-orange-500 p-4 rounded-xl flex flex-col items-center">
<Mail size={20}/>
<span className="text-xs">Contact</span>
</a>


</div>


</nav>


)

}