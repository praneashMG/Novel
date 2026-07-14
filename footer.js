document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-white text-slate-900 w-full border-t border-slate-100">

  <div class="max-w-7xl mx-auto px-6 py-14">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <div>
        <h1 class="text-2xl text-slate-900 font-bold tracking-tight mb-4">
          <a href="index.html" class="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 20 80 L 80 80 L 70 60 L 30 60 Z" fill="#1e293b" />
              <path d="M 30 60 L 70 60 L 60 40 L 40 40 Z" fill="#334155" />
              <path d="M 10 40 L 90 40 L 90 30 L 10 30 Z" fill="#1e293b" rx="2" />
              <path d="M 50 5 C 65 20, 65 40, 50 65 C 35 40, 35 20, 50 5 Z" fill="#8B4513" />
              <line x1="50" y1="25" x2="50" y2="45" stroke="#fff" stroke-width="2" />
              <circle cx="50" cy="45" r="2.5" fill="#fff" />
            </svg>
            <span>Ink<span style="color: #8B4513">Forge</span></span>
          </a>
        </h1>
        <p class="para text-slate-500 text-sm leading-relaxed mt-2">
          We craft bold, original comic books and graphic novels — from concept to print. 
          Independent storytelling, stunning artwork, and collector-worthy editions 
          delivered to readers worldwide.
        </p>

        <div class="flex gap-4 mt-6 text-lg">
          <a href="#" class="hover:text-[#8B4513] transition text-slate-400"><i class="bi bi-facebook"></i></a>
          <a href="#" class="hover:text-[#8B4513] transition text-slate-400"><i class="bi bi-instagram"></i></a>
          <a href="#" class="hover:text-[#8B4513] transition text-slate-400"><i class="bi bi-twitter-x"></i></a>
        </div>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4 text-slate-900">
          What We Do
        </h3>
        <ul class="space-y-2 text-slate-500 text-sm font-medium">
          <li><a href="services.html" class="hover:text-[#8B4513] transition">Comic Book Publishing</a></li>
          <li><a href="services.html" class="hover:text-[#8B4513] transition">Graphic Novel Production</a></li>
          <li><a href="services.html" class="hover:text-[#8B4513] transition">Cover Art & Illustration</a></li>
          <li><a href="services.html" class="hover:text-[#8B4513] transition">Print & Digital Distribution</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4 text-slate-900">
          Quick Links
        </h3>
        <ul class="space-y-2 text-slate-500 text-sm font-medium">
          <li><a href="about.html" class="hover:text-[#8B4513] transition">About</a></li>
          <li><a href="comics.html" class="hover:text-[#8B4513] transition">Comics</a></li>
          <li><a href="shop.html" class="hover:text-[#8B4513] transition">Shop</a></li>
          <li><a href="contact.html" class="hover:text-[#8B4513] transition">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold mb-4 text-slate-900">
          Our Studio
        </h3>

        <ul class="space-y-3 text-slate-500 text-sm font-medium">
          <li class="flex items-start gap-3">
            <i class="bi bi-geo-alt-fill text-[#8B4513] mt-0.5"></i>
            <span>42 Ink Street, Artist District<br>Portland, OR 97201</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-telephone-fill text-[#8B4513]"></i>
            <span>+1 (555) 987-6543</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bi bi-envelope-fill text-[#8B4513]"></i>
            <span>hello@inkforgestudio.com</span>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <div class="border-t border-slate-100 py-6 text-center text-slate-400 text-sm px-4 font-medium">
    © ${new Date().getFullYear()} InkForge Studio. All Rights Reserved.
  </div>

</footer>
`;
});
