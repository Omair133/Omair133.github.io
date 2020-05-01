const sections=document.querySelectorAll('.full-height');
const options={
	threshold: 0.45
};
const effectOnScroll = new IntersectionObserver(function(entries, effectOnScroll){
	entries.forEach(entry => {
		if(entry.isIntersecting)
		{
			document.querySelector('.effect').classList.remove('effect');
			const id=entry.target.getAttribute('id');
			document.getElementById(id).classList.add('effect');
		}
	});
}, options);

sections.forEach(section => {
	effectOnScroll.observe(section);
});




const skillBar=document.querySelector('.skill-bars');
const skillBarOptions={
	threshold:1
}
const skillBarEffect = new IntersectionObserver(function(entries, skillBarEffect){
	entries.forEach(entry => {
		if(entry.isIntersecting)
		{
			
        	$('.skill-bars').css('opacity','1');
        	$('.90').css('animation','to90');	
        	$('.70').css('animation','to70');
        	$('.50').css('animation','to50');
        	$('.40').css('animation','to40');
        	$('.80').css('animation','to80');
        	$('.20').css('animation','to20');
        	skillBarEffect.unobserve(entry.target);
		}
	});
},skillBarOptions);

skillBarEffect.observe(skillBar);



const sectionOne = document.querySelector('.page-one');
const logo=document.querySelector('.logo');
const sectionOneOptions = {
	threshold:0.45
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver){
	entries.forEach(entry => {
		if(!entry.isIntersecting)
		{
			logo.classList.add('nav-scrolled');
		}
		else
		{
			logo.classList.remove('nav-scrolled');
		}
	})
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);



const courses=document.querySelectorAll('.op0');
const coursesOption={
	threshold:1
}

const coursesEffect = new IntersectionObserver(function(entries, coursesEffect){
	entries.forEach(entry => {
		if(entry.isIntersecting)
		{
			$(entry.target).addClass('op1');
		}
	});
}, coursesOption);

courses.forEach(course=>{
	coursesEffect.observe(course);
})



