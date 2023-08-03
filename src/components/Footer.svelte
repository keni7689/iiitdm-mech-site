<script>
  //   import Logo from "$images/logo.webp";/
  //   import Link from "$ui/Link.svelte";
  //   import { footer } from "$lib/nav";

  const footer = {
    quickLinks: {
      title: "Useful Link",
      links: [{ title: "NIRF", href: "muth.com" }],
      links: [{ title: "New", href: "muth.com" }],
      links: [{ title: "NIRF", href: "muth.com" }],
      links: [{ title: "NIRF", href: "muth.com" }],
      links: [{ title: "NIRF", href: "muth.com" }],
    },
    usefulLinks: {
      title: "Students and Website",
      links: [{ title: "Acdemic Calender", href: "muth.com" }],
      links: [{ title: "Acdemic Calender", href: "muth.com" }],
      links: [{ title: "Acdemic Calender", href: "muth.com" }],
      links: [{ title: "Acdemic Calender", href: "muth.com" }],
      links: [{ title: "Acdemic Calender", href: "muth.com" }],
    },
    QuickLinks: {
      title: "Students and Website",
      links: [{ title: "Acdemic Calender", href: "muth.com" }],
      links: [{ title: "Acdemic Calender", href: "muth.com" }],
      links: [{ title: "Acdemic Calender", href: "muth.com" }],
      links: [{ title: "Acdemic Calender", href: "muth.com" }],
      links: [{ title: "Acdemic Calender", href: "muth.com" }],
    },
  };

  const social = [];
</script>

<footer class="w-full border-t border-base bg-muted">
  <div class="grid grid-cols-4 py-10">
    {#each Object.entries(footer) as [_, item]}
      <div class="flex flex-col items-center gap-1">
        <h1 class="mb-3 text-2xl font-medium">{item.title}</h1>
        <div class="mb-3 h-[1px] w-12 bg-inverted" />
        {#each item.links as { title, href }}
          <a {href}>{title}</a>
        {/each}
      </div>
    {/each}
    <div class="flex flex-col items-center gap-1">
      <h1 class="mb-3 text-2xl font-medium">Get In Touch</h1>
      <div class="mb-3 h-[1px] w-12 bg-inverted" />
      <div class="mb-3 text-center text-skin-accent">
        <p>IIITDM Kancheepuram</p>
        <p>Off Vandalur-Kelambakkam Road</p>
        <p>Chennai-600127</p>
      </div>
      <div class="flex gap-3">
        <a href="tel:+91-44-2747630">+91-44-2747630</a>
        <span>|</span>
        <a href="mailto:office@iiitdm.ac.in">office@iiitdm.ac.in</a>
      </div>
      <a href="/contact-us">Contact Us</a>
      <a href="/maps-and-directions">Maps & Directions</a>
    </div>
  </div>

  <div class="flex items-end justify-center gap-10 pb-5">
    <div class="flex items-center gap-2">
      <a href="https://www.youtube.com/channel/UCC0_90UdP8T31E4CLBhPWWA"
        >Youtube</a
      >
      <a href="https://www.facebook.com/iiitdmkanchee">Facebook</a>
      <a href="https://twitter.com/iiitdm_kancheep">Twitter</a>
    </div>
    <a class="flex flex-col items-center gap-1 text-accent" href="/">
      <img src="/logo.png" alt="logo" class="h-16" />
    </a>
    <div class="flex flex-col items-center">
      <div class="flex items-center gap-2">
        <a href="https://www.instagram.com/iiitdmkancheepuram/">Instagram</a>
        <a
          href="https://www.linkedin.com/school/indian-institute-of-information-technology-design-&-manufacturing-kancheepuram/"
          >Linkedin</a
        >
        <a
          href="https://www.researchgate.net/institution/Indian_Institute_of_Information_Technology_Design_Manufacturing_Kancheepuram_India"
          >Research-Gate</a
        >
      </div>
    </div>
  </div>
  <p class="text-center text-sm font-medium">
    © 2023, Indian Institute of Information Technology, Design and
    Manufacturing, Kancheepuram
  </p>
  <p class="mt-2 p-2 text-center text-xs font-medium text-skin-muted">
    Developed by <a href="/web-team" class="font-bold text-skin-accent"
      >Web Team IIITDM</a
    >
  </p>
</footer>
