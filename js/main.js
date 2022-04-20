let clicable = true;
$('.section-5 .card').on('click', function(){
    if(clicable == false){
        return false;
    }
    let card = $(this).data('card')
    let title = $(this).find('p').text();
    $('.section-5 .content .number').text('0' + card)
    $('.section-5 .content h2').text(title)

    $('.section-5 .content').show();
    $('.section-5 .content').animate({
            width:'100%',
            padding: '20px 50px',
            height:'100%'
        }, function(){
            $('.section-5 .content .close').fadeIn();
            $('.section-5 .content .icon').fadeIn();
            $('.section-5 .content .number').fadeIn();
            $('.section-5 .content h2').fadeIn();
            $('.section-5 .content p').fadeIn();
            $('.section-5 .content').addClass('visible');
        });
})

$('.section-5 .content .close').on("click", function(){
    clicable = false;
    $('.section-5 .content .close').fadeOut();
    $('.section-5 .content .number').fadeOut();
    $('.section-5 .content .icon').fadeOut();
    $('.section-5 .content h2').fadeOut();
    $('.section-5 .content').removeClass('visible');
    $('.section-5 .content p').fadeOut(function(){
        $('.section-5 .content').animate({
            width:'0%',
            padding:'0%',
            height:'0%'
        }, function(){
            $('.section-5 .content').hide();
        });
    });
    setTimeout(() => {
        clicable = true;
    }, 1500);
})

$(document).keyup(function(e) {
    if (e.key === "Escape") { 
        if(!$('.section-5 .content').hasClass('visible')){
            return false;
        }
        clicable = false;
        $('.section-5 .content .close').fadeOut();
        $('.section-5 .content .number').fadeOut();
        $('.section-5 .content').removeClass('visible');
        $('.section-5 .content .icon').fadeOut();
        $('.section-5 .content h2').fadeOut();
        $('.section-5 .content p').fadeOut(function(){
            $('.section-5 .content').animate({
                width:'0%',
                padding:'0%',
                height:'0%'
            }, function(){
                $('.section-5 .content').hide();
            });
        });
        setTimeout(() => {
            clicable = true;
        }, 1500);
    }
});

let section9Content = [
    {
      "title": "THE STORY",
      "text": `
        <p>With a total of 8888 uniquely randomised NFTs, Royal Kombat aims to create an online community for those passionate about the global fighting scene. </p>
        <p>Since the oldest times, people have invested time and money in collecting items that once belonged to celebrities. The value of these items is given by their connection to noteworthy historical or cultural events and is known to increase over time, just like the value of NFTs has the potential to increase considerably at resale. Royal Kombat was designed as a collection of digital memorabilia, combining the tangible nature of traditional collectibles with the modern features specific to Ethereum blockchain communities. </p>
        <p>Ownership includes commercial and creative rights and gives you access to the community, creating global networking opportunities both online and offline, granting VIP access to key local and global fighting galas and enabling you to take part in multiple giveaways uncovered along the way. Going for the big prize? At 75% of sales one lucky NFT holder will win a BMW 3 series 2022 offered by one of our trusted partners. </p>
      `,
    },
    {
      "title": "THE PURPOSE",
      "text": `
            <p>First and foremost, Royal Kombat was designed as a project that has the power to reunite the blockchain community with global supporters of combat sports.</p>    
            <p>The importance of passing on legacy stands at the core of this project, having influenced every single stage, from initial concept to sell-out. For the design, we decided to work with new up and coming artists - each creative element has been hand drawn by a group of Graphic Design students from the Bucharest National University of Arts. This has not only created valuable employment opportunities for young artists, but has also provided the uniqueness and quirkiness of every single fighter from the collection. While automatization facilitates speed of transactions on the Ethereum blockchain, uniqueness comes from working with creative individuals and allowing them to project their personalities in their designs.</p>
            <p>Moving forward, the project is concerned with supporting and promoting young talent in the Romanian combat scene. In other words, at different stages of the project, percentage of the profit will be invested in modernization, renovation and equipment purchase for youth combat schools in Romania. Constant updates on the progress of the charitable element of the project will be provided constantly on our social media platforms.</p>    
      `,
    },
    {
        "title": "THE COMMUNITY",
        "text": `
            <h3>Holder Benefits</h3>
            <h4>Ownership includes a number of digital and physical benefits:</h4>    
            <p>-Commercial and creative rights of your unique fighter. </p>
            <p>-Access to a number of Romanian galas that will be revealed along the way </p>      
            <p>-Access to offline events organized specifically for the Royal Kombat Community of owners.</p>      
            <p>-Face to face meetings and networking opportunities with some of the biggest names in the Romanian fighting scene</p>      
            <p>-Giveaways of exclusive VIP experience packages to a world-renowned fighting gala </p>      
            <p>Discounts on monthly memberships in our partner gyms</p>      
            <p>-Discounts on gym supplements provided by our partner brands </p>      
            <p>Streetwear. Register 30 days of purchase to receive a complementary T-shirt of your unique NFT character. </p>      

        `,
      },
      {
        "title": "THE ROYAL KOMBAT ACADEMY",
        "text": `
            <h3>Giving back to the community by investing in young talent</h3>        
            <p>Regardless if we are talking about boxing, MMA, kickboxing, wrestling or jiu-jitsu, we are firm believers that combat sports bring a positive contribution to the mental and physical development of youth. Practiced from a young age, combat sports are the key to a balanced lifestyle: they improve children’s self-esteem, teaching them about self-control, positivity, motivation and discipline, in relation to sport, as well as all other aspects of their everyday lives.</p>
            <p>We are aware that supporting young talent is crucial to building champions and continuing legacy of the combat scene. As a result, we have founded the Royal Kombat Academy, which is a key offline component of this project. Once the 50% of sales milestone has been reached, 30% of profits will be used for renovating and purchasing equipment for combat sport schools in various cities in Romania. </p>

        `,
      },
      {
        "title": "THE PURCHASE",
        "text": `
            <h3>How to get a RK unique fighter</h3>  
            <h2>COMING SOON</h2>        
        `,
      },
      {
        "title": "COMING SOON",
        "text": `
            <h2>COMING SOON</h2>          
        `,
      },
  ]

  let sectionSlide4Content = [
    {
      "title": "PRE-SALE",
      "text": `
        <p>The NFT collection pre-sale will bring a series of benefits to those who decide to make a purchase at this point.</p>
      `,
    },
    {
      "title": "T-SHIRT DISTRIBUTION",
      "text": `
            <p>Register within 30 days of purchase to receive a complementary T-shirt of your unique fighter. </p>    
      `,
    },
    {
        "title": "10% OF SALES",
        "text": `
            <p>All RK NFT holders will automatically be entered in a giveaway for a chance to win an iPhone 13 Pro Max. </p>      

        `,
      },
      {
        "title": "25% OF SALES",
        "text": `
            <p>All RK NFT holders will automatically be entered in a giveaway for a chance to win a MacBook Pro. </p>

        `,
      },
      {
        "title": "50% OF SALES",
        "text": `
           <p>One lucky holder will win 2 VIP Experience packages to a world-renowned combat gala</p>
           <p>30% of profit will be used for modernization, renovation and equipment purchase for youth combat schools in Romania. </p>    
        `,
      },
      {
        "title": "75% OF SALES",
        "text": `
            <p>All RK NFT holders will automatically be entered in a giveaway for a chance to win a BMW 3 Series 2022. </p>        
            <p>30% of profit will be used for modernization, renovation and equipment purchase for youth combat schools in Romania. </p>
        `,
      },
      {
        "title": "100% OF SALES",
        "text": `
           <p>All RK NFT holders will automatically be entered in a giveaway for a chance to win a BMW 3 Series 2022.</p>
           <p>30% of profit will be used for modernization, renovation and equipment purchase for youth combat schools in Romania. </p>    
        `,
      },
  ]
  

$('.section-9 .card').on("click", function(){
    $('body').css({
        overflowX: 'hidden'
    });
    $('.section-9').css({
        transform: 'translateX(-90%)'
    });
    $('.overlay-9').fadeIn();
    $('.popUp-9').show();
    $('.popUp-9').animate({
        width: '90%'
    }, 300, function(){
        $('.popUp-9 .content').fadeIn();
    });

})

$('.overlay-9').on("click", function(){
    $('.popUp-9 .content').fadeOut(function(){
        $('.popUp-9').animate({
            width: '0%'
        }, function(){
            $('.popUp-9').hide();
            $('.overlay-9').fadeOut();
            $('.section-9').css({
                transform: 'translateX(0%)'
            });
        })
    });

})

$('.close').on("click", function(){
    $('.popUp-9 .content').fadeOut(function(){
        $('.popUp-9').animate({
            width: '0%'
        }, function(){
            $('.popUp-9').hide();
            $('.overlay-9').fadeOut();
            $('.section-9').css({
                transform: 'translateX(0%)'
            });
        })
    });

})