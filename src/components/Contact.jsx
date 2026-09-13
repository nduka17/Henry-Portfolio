export default function Contact(){

return(

<section id="contact"
className="py-20 px-6 max-w-4xl mx-auto">


<h2 className="text-4xl font-bold">
Contact
</h2>


<div className="mt-8 text-gray-300">

<p>
📞 Phone: +234 8061660295
</p>


<p className="mt-3">
✉ Email: henrynduka05@outlook.com
</p>


<p className="mt-5 text-gray-400">

I am open to discussing new projects,
technology opportunities, partnerships
and collaborations.

</p>


</div>


<form className="mt-10 space-y-5">


<input
placeholder="Name"
className="w-full p-4 bg-slate-900 rounded-xl"
/>


<input
placeholder="Email"
className="w-full p-4 bg-slate-900 rounded-xl"
/>


<textarea
placeholder="Message"
className="w-full p-4 bg-slate-900 rounded-xl h-32"
/>


<button className="bg-cyan-500 text-black px-8 py-3 rounded-xl">

Send Message

</button>


</form>


</section>

)

}