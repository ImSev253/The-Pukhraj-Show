
export const getTheme = () => {
    if (typeof document === 'undefined') return 'dark'
    const html = document.documentElement
    return html.classList.contains('light') ? 'light' : 'dark'
}

export const toggleTheme = () =>{
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');

    if (isDark) {
        html.classList.remove('dark');
        html.classList.add('light');
        html.style.colorScheme = 'light'
        localStorage.setItem("theme", 'light');
        return
    }

    html.classList.remove('light');
    html.classList.add('dark');
    html.style.colorScheme = 'dark'
    localStorage.setItem("theme", 'dark')
}

export const initTheme = () =>{
    const savedTheme = localStorage.getItem("theme");
    const html = document.documentElement;
    const nextTheme = savedTheme === 'light' ? 'light' : 'dark';

    html.classList.remove('dark','light');
    html.classList.add(nextTheme)
    html.style.colorScheme = nextTheme
    localStorage.setItem('theme', nextTheme)
}
