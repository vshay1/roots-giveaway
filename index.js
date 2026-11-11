document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'hidden';
    
    initButtons();
});

function initButtons(){
    const content = document.getElementById('content');
    const button1 = document.getElementById('button-1');
    const button2 = document.getElementById('button-2');
    const foreground = document.querySelector('.foreground');

    button1.addEventListener('click', () => {
        
        foreground.style.background = 'none';
        foreground.style.position = 'relative';
        
        content.innerHTML = `
            <div class="main">
                <div class="left">
                    <div class="section" id="first">
                        <div class="slogan">
                            <div id="slogan">Rooted in education, growing for tomorrow.</div>
                        </div>
                    </div>
                    <div class="section" id="second">
                        <div class="about-us">
                            <div class="header">About Us</div>
                            <span>We are a community based education provider that seeks to provide accessible resources to the community, and to educate individuals about the long road ahead of us. We seek to educate about the future of social activism, especially when it comes to black women. This event is inspired in large by Moya Bailey, a social rights activist credited with coining the term 'Misogynoir' to describe the specific type of bigotry that affects Black women.</span>
                            <span>To sign up for counseling, click <a href="https://forms.gle/VK8EmyV6gZ2WSab96">here</a>.</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="header">Testimonials</div>
                    <div class="card-list">
                        <div class="card">
                            <span style="border: 1px solid black;">"I come here to the events every week! It has been so helpful for me reconnecting with my identity as a Black woman who has just moved to the city and needs to find a new doctor."</span>
                            <div>—</div>
                            <span>Geneva</span>
                        </div>
                        <div class="card">
                            <span style="border: 1px solid black;">"I love coming here to connect with my local community and hearing stories and experiences other women like me have!"</span>
                            <div>—</div>
                            <span>Evon</span>
                        </div>
                        <div class="card">
                            <span style="border: 1px solid black;">"I appreciate the counseling services that are offered and I love the atmosphere the counselors provide during my time of need. I also tell other Black women about these events so they can come out to them too and, have access to things they need."</span>
                            <div>—</div>
                            <span>Monique</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    button2.addEventListener('click', () => {
        const background = document.querySelector('.background');
        background.style.height = "100vh";
        background.style.width = "100vw";
        background.innerHTML = ``;
        
        background.style.background = 'repeating-linear-gradient(45deg, rgb(214, 135, 210) 0 10px, #d78bd1 10px 20px)';

        foreground.style.background = 'none';

        content.style.justifyContent = "center";
        content.style.alignItems = "center";
        content.innerHTML = `
            <div class="header" style="width: 900px; text-align: center">Donations are always appreciated, but never required!</div>
            <span>This is a concept, the button/input field below does nothing.</span>
            <input 
                type="text"
                id="currency-input"
                inputmode="numeric"
                autocomplete="off"
                value="$0.00"
            />
            <button class="button">Donate!</button>
        `;
        initDonate();
    });


}

function initDonate(){
    const input = document.getElementById('currency-input');

    let cents = 0;

    function format(c) {
        return (c / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        });
    }

    input.value = format(cents);

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
        e.preventDefault();
        cents = Math.floor(cents / 10); 
        input.value = format(cents);
        return;
        }

        if (/^\d$/.test(e.key)) {
        e.preventDefault();

        if (cents > 99999999999) return;
        cents = cents * 10 + Number(e.key);
        input.value = format(cents);
        return;
        }

  
        const allowed = ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Tab','Home','End','Enter','Escape'];
        if (!allowed.includes(e.key) && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        }
    });

    input.addEventListener('click', () => {
        const len = input.value.length;
        input.setSelectionRange(len, len);
    });
    input.addEventListener('focus', () => {
        const len = input.value.length;
        requestAnimationFrame(() => input.setSelectionRange(len, len));
    });
}
