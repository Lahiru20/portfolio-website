
const { annotate } = RoughNotation;


  const undergraduate = annotate(document.getElementById('undergraduate'), { type: 'box' , color: '#FF8080'});
  const bachelor = annotate(document.getElementById('bachelor'), { type: 'underline' , color: '#FF8080'});
  const university = annotate(document.getElementById('university'), { type: 'circle' , color: '#FF8080'});
  const diploma = annotate(document.getElementById('diploma'), { type: 'underline' ,color: '#133E87' });
  const fullstack = annotate(document.getElementById('fullstack'), { type: 'highlight', color: '#FFCF96' });
  const freelancer = annotate(document.getElementById('freelancer'), { type: 'highlight', color: '#CDFADB' });
  const seller = annotate(document.getElementById('seller'), { type: 'box' , color: '#15B392'});


  const fullstack2 = annotate(document.getElementById('fullstack2'), { type: 'highlight', color: '#FFCF96' });
  const mluiux = annotate(document.getElementById('mluiux'), { type: 'underline' , color: '#37AFE1'});


  undergraduate.show();
  bachelor.show();
  university.show();
  diploma.show();
  fullstack.show();
  freelancer.show();
  seller.show();
  fullstack2.show();
  mluiux.show();


  const testimonials = [
    {
      name: "Achintha Dilshan",
      position: "Software Engineer",
      photo:
        "https://media.licdn.com/dms/image/v2/D5635AQE5cKHeHtP-cw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1730360831998?e=1732356000&v=beta&t=DF1R71wZ_BE-RarPfur60TwpYy2bb7frbrZ8aku4R-8",
      text:
        "I've worked with many of Web developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code."
    },
    {
      name: "Lahiru Dineth",
      position: "Batchmate - ICET",
      photo: "https://media.licdn.com/dms/image/v2/D4E03AQFjQHZaqDzhxA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731310243159?e=1736985600&v=beta&t=XsMhf4wAovfCrTAv-HPVWAxdi-jm2iCL7L4Vdrg1RZU",
      text:
        "This guy is an amazing fullstack developer, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. i know that from experience when he work with our team once"
    },

    {
      name: "Ruvindu Ranasingha",
      position: "Batchmate - ICET",
      photo: "https://media.licdn.com/dms/image/v2/D4D03AQFvSpmLcr1Acw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728999888159?e=1736985600&v=beta&t=TC9nM_ckNMv9lJ5w2k7MR5oexNlAIqBmEL2cFkJT4jM",
      text: 'I have no doubt that Lahiru will continue to excel in his future endeavors in software engineering. He possess the skills, work ethic, and determination necessary to make a significant impact in the tech industry. I’m excited to see all the amazing things He will accomplish in the future'
    }
  ];
  
  const testimonialsContainer = document.querySelector(".testimonials-container");
  const testimonial = document.querySelector(".testimonial");
  const userImage = document.querySelector(".user-image");
  const username = document.querySelector(".username");
  const role = document.querySelector(".role");
  
  let idx = 1;
  
  function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];
    testimonial.innerText = text;
    userImage.src = photo;
    username.innerText = name;
    role.innerText = position;
  
    idx++;
    if (idx > testimonials.length - 1) {
      idx = 0;
    }
  }
  
  setInterval(updateTestimonial, 10500);