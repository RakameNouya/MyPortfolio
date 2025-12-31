// Form Submitted (Dummy)
document.addEventListener('DOMContentLoaded', function()
    {
        // Pop-up text success when submitted
        let form = document.querySelector('#contact-form');
        let confirmation = document.querySelector('#confirmation');

        form.addEventListener('submit', function(event)
            {
                confirmation.style.display = "block";
                this.reset();
                event.preventDefault();
                console.log("Form submitted");
            });

        // Reset after starting to fill the form
        let inputs = document.querySelectorAll('input', 'textarea');

        inputs.forEach(function(input)
            {
                input.addEventListener('input', function()
                    {
                        confirmation.style.display = 'none';
                    });
            });
    });


// Index's button hover
document.addEventListener('DOMContentLoaded', () =>
    {
        document.querySelector('#projects').addEventListener('mouseover', () =>
            {
                document.querySelector("#descPro").innerHTML = 'My projects >//<';
            });
        document.querySelector('#projects').addEventListener('mouseout', () =>
            {
                document.querySelector("#descPro").innerHTML = '';
            });

        document.querySelector('#about').addEventListener('mouseover', () =>
            {
                document.querySelector("#descAbo").innerHTML = 'About Me >//<';
            });
        document.querySelector('#about').addEventListener('mouseout', () =>
            {
                document.querySelector("#descAbo").innerHTML = '';
            });

        document.querySelector('#contact').addEventListener('mouseover', () =>
            {
                document.querySelector("#descCon").innerHTML = 'Contact Me >//<';
            });
        document.querySelector('#contact').addEventListener('mouseout', () =>
            {
                document.querySelector("#descCon").innerHTML = '';
            });
    });


// About's button hover
document.addEventListener('DOMContentLoaded', () =>
    {
        document.querySelector('#cv').addEventListener('mouseover', () =>
            {
                document.querySelector("#descCv").innerHTML = 'My CV >//<';
            });
        document.querySelector('#cv').addEventListener('mouseout', () =>
            {
                document.querySelector("#descCv").innerHTML = '';
            });
    });

// About's image transition
document.addEventListener('DOMContentLoaded', () =>
    {
        let img = document.querySelector('#pic');
        let imageList = ['before.png', 'after.png'];
        let current = 0;

        function tukar()
        {
            // add fade-out effect on #pic
            img.classList.add('fade-out');

            setTimeout(() =>
            {
                // rotasi urutan gambar
                current = (current + 1) % imageList.length;
                img.src = imageList[current];

                setTimeout(() =>
                {
                    // remove fade-out effect on #pic
                    img.classList.remove('fade-out');
                }, 100);
            }, 1000);
        }

        setInterval(tukar, 6000);
    });


// Project's filter
document.addEventListener('DOMContentLoaded', () =>
    {
        let buttons = document.querySelectorAll('[data-filter]');
        let items = document.querySelectorAll('.project-item');

        buttons.forEach(button =>
            {
                button.addEventListener('click', () =>
                    {
                        let filter = button.getAttribute('data-filter');

                        items.forEach(item =>
                            {
                                let category = item.getAttribute('data-category');

                                if (filter === 'all' || filter === category)
                                {
                                    item.classList.add('show');
                                    item.style.display = 'block';

                                    setTimeout(() => {item.style.opacity = '1'}, 600);
                                }
                                else
                                {
                                    item.style.opacity = '0';

                                    setTimeout(() =>
                                        {
                                            item.style.display = 'none';
                                            item.classList.remove('show');
                                        }, 600);
                                }
                            });
                    });
            });
    });
