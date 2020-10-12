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
    $('#addSkill').click(function(){
      ($("#skillsForm").clone().insertBefore("#skillsBtnRow"));
    });
    $('#addHobby').click(function(){
      ($("#hobbiesForm").clone().insertBefore("#hobbyBtnRow"));
    });
    $('#addLanguage').click(function(){
      ($("#languagesForm").clone().insertBefore("#languageBtnRow"));
    });
    
    // Event listener on printPdf button
    document.getElementById ("printPdf").addEventListener ("click", generatePDF);
    
    // Function to generate PDF
    function generatePDF() {
      var opt = {
        pagesplit: true,
        enableLinks : true,
        isToggleStyle: true,
        filename:     'myresume.pdf',
        image:        { type: 'jpeg', quality: 1 },
        html2canvas:  { scale: 2 },
      };
    
      // Choose the element that our invoice is rendered in.
      const element = document.getElementById("resume-body");
      // Choose the element and save the PDF for our user.
      html2pdf()
        .set(opt)
        .from(element)
        .save();
    }
});



