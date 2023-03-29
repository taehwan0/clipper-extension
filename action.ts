document.getElementById('button1')?.addEventListener('click', () => {  
    chrome.tabs.captureVisibleTab((dataUrl) => {
    const image: any = document.getElementById('image1');
    if (image) {
        image.src = dataUrl;
    }
   });
});

// document.getElementById('button2')?.addEventListener('click', () => {
//     const html = document.documentElement.innerText;
//     const textarea: any = document.getElementById('textarea1');
//     textarea.value = html;
// })