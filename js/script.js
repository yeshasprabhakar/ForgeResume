$(document).ready(function(){
    $('#addEducation').click(function(){
      ($("#educationForm").clone().insertBefore("#educationBtnRow"));
    });
    $('#addExperience').click(function(){
      ($("#experienceForm").clone().insertBefore("#experienceBtnRow"));
    });
    $('#addProject').click(function(){
      ($("#projectsForm").clone().insertBefore("#projectsBtnRow"));
    });
    $('#addAward').click(function(){
      ($("#awardsForm").clone().insertBefore("#awardsBtnRow"));
    });
    $('#addCertification').click(function(){
      ($("#certificationForm").clone().insertBefore("#certificationBtnRow"));
    });
    $('#addHobby').click(function(){
      ($("#hobbiesForm").clone().insertBefore("#hobbyBtnRow"));
    });
    $('#addLanguage').click(function(){
      ($("#languagesForm").clone().insertBefore("#languageBtnRow"));
    });
});

function generatePDF() {
  var opt = {
    margin:       0.5,
    pagesplit: true,
    enableLinks : true,
    isToggleStyle: false,
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 1 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };
  
  // Change background color before print
  // document.body.style.backgroundColor = 'green';
  $("#resume-body").css({"background":"#C7B9FF"});

  // Choose the element that our invoice is rendered in.
  const element = document.getElementById("resume-body");
  // Choose the element and save the PDF for our user.
  html2pdf()
    .set(opt)
    .from(element)
    .save();
    document.body.style.backgroundColor = '#C7B9FF';
}