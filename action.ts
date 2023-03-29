document.getElementById('button1')?.addEventListener('click', () => {  
    chrome.tabs.captureVisibleTab((dataUrl) => {
    const image: any = document.getElementById('image1');
    if (image) {
        image.src = dataUrl;
    }
   });
});

document.getElementById('button2')?.addEventListener('click', () => {
    console.log('hit')

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currTab = tabs[0];
        
        let tabId = 0;

        if (currTab && currTab.id) { // Sanity check
          tabId = currTab.id;
        }

        const detail = {
            tabId: tabId
        }

        chrome.pageCapture.saveAsMHTML(detail, (mhtml) => {
            const textarea: any = document.getElementById('textarea1');
            if (textarea) {
                textarea.value = blobToString(mhtml);
                console.log(mhtml);
            }
        })
    });
})

function blobToString(b?: Blob) {
    if (b) {
        var u, x;
        u = URL.createObjectURL(b);
        x = new XMLHttpRequest();
        x.open('GET', u, false); // although sync, you're not fetching over internet
        x.send();
        URL.revokeObjectURL(u);
        return x.responseText;
    }
    return null;
}