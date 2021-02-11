const main = (() => {
    const data = {
        home: `<div class="about-section content-space">
        <div class="about-section__introduce">
            <div class="header-picture--size-big">
                <img src="assets/profile_pic.jpg" alt="Duy Anh Vu">
            </div>
            <div class="about-section-description">
                <span class="about-section-description__title space-between-text">Web
                    Developer</span>
                <span class="about-section-description__name">Duy Anh Vu</span>
                <span class="about-section-description__about">I am a Full-Stack Web Developer & Web
                    Designer based in The USA, but working
                    Worldwide. I am passionate about designing and developing user-friendly
                    websites. I
                    have all the skills to create a new high quality website or improve existing
                    websites for individuals and organisations, using the latest techniques and
                    trends.</span>
                <div class="about-section-navigation">
                    <a href="#">
                        <div class="center-content btn-primary--border-blue">
                            <span>Download CV</span>
                        </div>
                    </a>
                    <a href="#">
                        <div class="center-content btn-primary--border-grey">
                            <span>Contact</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <div class="about-section__description">
            <span>What <span style="color: #04b4e0">I Do</span></span>
            <div style="display: flex; flex-direction: row; flex-wrap: wrap;">
                <div class="description__ecommerce">
                    <span class="icon icon-store icon--blue icon--big"></span>
                    <span>
                        <b>Ecommerce</b>
                    </span>
                    <span class="about-section-description__about">
                        Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor
                        bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non
                        sodales.
                    </span>
                </div>
                <div class="description__ecommerce">
                    <span class="icon icon-store icon--blue icon--big"></span>
                    <span>
                        <b>Ecommerce</b>
                    </span>
                    <span class="about-section-description__about">
                        Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor
                        bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non
                        sodales.
                    </span>
                </div>
                <div class="description__ecommerce">
                    <span class="icon icon-store icon--blue icon--big"></span>
                    <span>
                        <b>Ecommerce</b>
                    </span>
                    <span class="about-section-description__about">
                        Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor
                        bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non
                        sodales.
                    </span>
                </div>
                <div class="description__ecommerce">
                    <span class="icon icon-store icon--blue icon--big"></span>
                    <span>
                        <b>Ecommerce</b>
                    </span>
                    <span class="about-section-description__about">
                        Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor
                        bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non
                        sodales.
                    </span>
                </div>
            </div>
        </div>
    </div>`,
        contact: ` <div class="contact-section content-space">
    <span class="about-section-description__name">Contact</span>
    <div style="display: flex; flex-direction: row;">
        <div class="contact__list">
            <div class="contact__detail">
                <span class="icon icon-location icon--blue icon--big"></span>
                <span><b>Vietnam</b></span>
            </div>
            <div class="contact__detail">
                <span class="icon icon-phone icon--blue icon--big"></span>
                <span><b>+84335779281</b></span>
            </div>
            <div class="contact__detail">
                <span class="icon icon-mail icon--blue icon--big"></span>
                <span><b>duyanhv187@gmail.com</b></span>
            </div>
            <div class="contact__detail">
                <span class="icon icon-checked icon--blue icon--big"></span>
                <span><b>Freelance Available</b></span>
            </div>
        </div>
        <div class="contact__email-form">
            <span>How Can I <span style="color: #04b4e0">Help You?</span></span>
            <div style="display: flex; justify-content: center; align-items: center;">
                <div style="flex: 0 50%;">
                    <input type="text" placeholder="Full Name" class="input--big">
                    <input type="email" placeholder="Email Address"
                        class="input--big space-between-text">
                    <input type="text" placeholder="Subject"
                        class="input--big space-between-text">
                </div>
                <div style="flex: 0 50%;">
                    <textarea name="message" cols="15" rows="5"
                        placeholder="Message"></textarea>
                </div>

            </div>
            <div class="h-captcha" data-sitekey="db7891d7-880d-49c2-8110-82a085dbbb6e"></div>
            <a href="#">
                <div class="center-content btn-primary--border-blue space-between-text">
                    <span>Send message</span>
                </div>
            </a>
        </div>
    </div>
</div>
`,
        resume: `<div class="contact-section content-space">
<span class="about-section-description__name">Resume</span>
<div style="display: flex; flex-direction: column; flex: 1;">
    <span>Education</span>
    <div style="display: flex;">
        <div style="display:flex; flex: 1; text-align: right; flex-direction: column; padding-right: 15px;">
            <b>2014-2018</b>
            <span>Hanoi Open University</span>
        </div>
        <div class="time-line">
            <b>Information Technology - Bachelor</b> 
            <span>Rank 1st of department in semester 2-3  (08/2017 - 05/2018)  - scholarship holder for that period.</span>
        </div>
    </div>
</div>
</div>`
    }
    document.getElementsByClassName('flip-box-front')[0].innerHTML = data.home;
    const linkList = ['link-home', 'link-resume', 'link-contact'];
    let isFlipped = false;
    let currentActive = 'link-home';
    linkList.forEach((link) => {
        document.getElementById(link).onclick = () => {
            if(currentActive === link){
                return;
            }
            let node = data.home;
            switch (link) {
                case 'link-home':
                    node = data.home;
                    break;
                case 'link-resume':
                    node = data.resume;
                    break;
                case 'link-contact':
                    node = data.contact;
                    break;
                default:
                    break;
            }

            document.getElementsByClassName(!isFlipped ? 'flip-box-back' : 'flip-box-front')[0].innerHTML = node;

            document.getElementById('home').style.transform = !isFlipped ? 'rotateX(180deg)' : '';
            isFlipped = !isFlipped;
            currentActive = link;
        }
    })
})()