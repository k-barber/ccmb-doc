function toggleRecent(this: HTMLElement) {
  this.classList.toggle("collapsed")
  const content = this.nextElementSibling as HTMLElement | undefined
  if (!content) return
  content.classList.toggle("collapsed")
  content.style.maxHeight = content.style.maxHeight === "0px" ? content.scrollHeight + "px" : "0px"
}

function setupRecent() {
  const recent = document.getElementById("recent")
  if (recent) {
    const collapsed = recent.classList.contains("collapsed")
    const content = recent.nextElementSibling as HTMLElement | undefined
    if (!content) return
    content.style.maxHeight = collapsed ? "0px" : content.scrollHeight + "px"
    recent.addEventListener("click", toggleRecent)
    window.addCleanup(() => recent.removeEventListener("click", toggleRecent))
  }
}

window.addEventListener("resize", setupRecent)
document.addEventListener("nav", () => {
  setupRecent()

  // update recent entry highlighting
  observer.disconnect()
  const headers = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")
  headers.forEach((header) => observer.observe(header))
})
