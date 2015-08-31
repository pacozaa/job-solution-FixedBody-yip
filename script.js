var fields;
$(function()
{
   $("#bodyright").append("<div id='loader' align='center'><div class=\"panel panel-primary\" style=\"margin-bottom: 5px;\"><div class=\"panel-heading\"><h3 class=\"panel-title\">&nbsp;<\/div><div class='panel-body well' style=\"margin-bottom: 0px; padding-bottom: 0px;\"><span class='glyphicon glyphicon-refresh spinning'><\/span> Loading...<br\/><br\/><\/div><\/div><\/div>");
   var status = true;
   $("#toggle").click(function()
   {
      $('#menu_collapse').collapse('toggle');
      if (status == true)
      {
         //document.getElementById("bodyright").style.width= "1024px";
         setTimeout(function()
         {
            document.getElementById("bodyright").style.minHeight = "100%";
            document.getElementById("bodyright").style.minWidth = "100%";
            $("table").each(function(object)
            {
               var vaGridId = $(this).attr('id');
               if (vaGridId != null)
               {
                  if (vaGridId.indexOf('masterGridDetail') != -1)
                  {
                     $("#" + vaGridId).setGridWidth($("#form_body").width() - 70);
                  }
                  else if (vaGridId.indexOf('masterGrid') != -1)
                  {
                     $("#" + vaGridId).setGridWidth($("#form_body").width() - 40);
                  }
               }
            });

         }, 330);

         status = false;
         if (window.matchMedia('(max-width: 768px)').matches)
         {
            $("#form_body").hide("fast", function()
            {
               $("html,body").animate(
               {
                  scrollTop: 0
               }, "fast");
               $("html,body").animate(
               {
                  scrollTop: 1
               }, "fast");
               $("html,body").animate(
               {
                  scrollTop: 0
               }, "fast");
               $("#form_body").show();
            });
         }
      }
      else
      {
         //document.getElementById("bodyright").style.width= "704px";
         document.getElementById("bodyright").style.minHeight = "0";
         document.getElementById("bodyright").style.minWidth = "0";
         setTimeout(function()
         {
            //$("#masterGrid").setGridWidth($("#form_body").width() - 40);
            $("table").each(function(object)
            {
               var vaGridId = $(this).attr('id');
               if (vaGridId != null)
               {
                  if (vaGridId.indexOf('masterGridDetail') != -1)
                  {
                     $("#" + vaGridId).setGridWidth($("#form_body").width() - 70);
                  }
                  else if (vaGridId.indexOf('masterGrid') != -1)
                  {
                     $("#" + vaGridId).setGridWidth($("#form_body").width() - 40);
                  }
               }
            });
         }, 330);
         status = true;
         if (window.matchMedia('(max-width: 768px)').matches)
         {
            $("#form_body").hide("fast", function()
            {
               $("html,body").animate(
               {
                  scrollTop: 0
               }, "fast");
               $("html,body").animate(
               {
                  scrollTop: 1
               }, "fast");
               $("html,body").animate(
               {
                  scrollTop: 0
               }, "fast");
               $("#form_body").show();
            });
         }
      }
      //document.getElementById("bodyright").style.width="1300px"; //$(window).width(); 
   });
   $('#menu_collapse').collapse(
   {
      toggle: true
   });
   $("#demo1").navgoco(
   {
      caret: '<span class="caret"></span>',
      accordion: false,
      openClass: 'open',
      save: true,
      cookie:
      {
         name: 'navgoco',
         expires: false,
         path: '/'
      },
      slide:
      {
         duration: 400,
         easing: 'swing'
      }
   });
   $("#collapseAll").click(function(e)
   {
      e.preventDefault();
      $("#demo1").navgoco('toggle', false);
   });
   $("#expandAll").click(function(e)
   {
      e.preventDefault();
      $("#demo1").navgoco('toggle', true);
      // Show|Hide sub-menus with specific indexes
      // It will also open parent sub-menus since v0.1.2      
      //$("#demo1").navgoco('toggle', true, 1, 2, 4);
   });

   setTimeout(function()
   {
      $("table").each(function(object)
      {
         var vaGridId = $(this).attr('id');
         if (vaGridId != null)
         {
            if (vaGridId.indexOf('masterGridDetail') != -1)
            {
               $("#" + vaGridId).setGridWidth($("#form_body").width() - 70);
            }
            else if (vaGridId.indexOf('masterGrid') != -1)
            {
               $("#" + vaGridId).setGridWidth($("#form_body").width() - 40);
            }
         }
      });

   }, 500);

   $(window).bind('resize', function()
   {
      //$("#masterGrid").setGridWidth($("#form_body").width() - 20);

      $("table").each(function(object)
      {
         var vaGridId = $(this).attr('id');
         if (vaGridId != null)
         {
            if (vaGridId.indexOf('masterGridDetail') != -1)
            {
               $("#" + vaGridId).setGridWidth($("#form_body").width() - 70);
            }
            else if (vaGridId.indexOf('masterGrid') != -1)
            {
               $("#" + vaGridId).setGridWidth($("#form_body").width() - 40);
            }
         }
      });
   }).trigger('resize');


   //$("body").attr("onload", "firstLoad();afterLoad();");
   if ($("body").attr("onload") != undefined && $("body").attr("onload").indexOf('firstLoad') != -1)
   {
      $("body").attr("onload", "firstLoad();afterLoad();");
   }
   // onblur decimal
   jQuery.fn.decimal = function(number, decimals)
      {
         var vnDecimal = !isFinite(+decimals) ? 0 : Math.abs(decimals);
         var vnMaxLength = number + (Math.ceil((number - vnDecimal) / 3));
         if (vnDecimal == 0)
         {
            vnMaxLength = vnMaxLength - 1;
         }


         var vaDecimal = '';
         while (vaDecimal.length < vnDecimal)
         {
            vaDecimal += '0';
         }
         return this.each(function()
         {
            $(this).attr("maxlength", vnMaxLength);
            $(this).on("blur", function()
            {
               var elementId = this.id;
               if (vaDecimal.length > 0)
               {
                  $(this).val(cnvToFormat($(this).val(), "#,##0." + vaDecimal));
               }
               else
               {
                  $(this).val(cnvToFormat($(this).val(), "#,##0"));
               }
               if ($(this).val().length > vnMaxLength)
               {
                  if ($('#modalTmp').length == 0)
                  {
                     $('<div class="modal fade" id="modalTmp">' +
                        '<div class="modal-dialog modal-sm">' +
                        '<div class="modal-content">' +
                        '<div class="modal-header">' +
                        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;<\/button>' +
                        '<h5 class="modal-title">&nbsp;<\/h5>' +
                        '<\/div>' +
                        '<div class="modal-body" style="text-align: center;">มีค่าเกินกว่ากำหนด<\/div>' +
                        '<div class="modal-footer" style="text-align: right;">' +
                        '<button type="button" class="btn btn-primary btn-xs" data-dismiss="modal" id="btnModalTmp"><b>&nbsp;&nbsp;ตกลง&nbsp;&nbsp;<\/b>' +
                        '<\/div>' +
                        '<\/div><\/div><\/div>').appendTo("body");
                  }
                  $("#modalTmp").off('shown.bs.modal');
                  $("#modalTmp").on('shown.bs.modal', function()
                  {
                     $("#btnModalTmp").focus();
                  })
                  $("#btnModalTmp").off("keydown.tab");
                  $("#btnModalTmp").on("keydown.tab", function(e)
                  {
                     if (e.keyCode == 9)
                     {
                        e.preventDefault();
                     }
                  });
                  $("#modalTmp").off("hide.bs.modal");
                  $("#modalTmp").on("hide.bs.modal", function()
                  {
                     $("#" + elementId).focus();
                  });
                  $(this).val("");
                  $('#modalTmp').modal('show');
               }
            });

         });
      }
      // onblur decimal


   $("#OPNSRH").on("click", function()
   {
      afterLoad();
   });


   //alert(1);

   //$("#form_body").append("<div id='firstLoadPage' align='center' class='panel-body well' style='margin-bottom: 0px; padding-bottom: 0px;'><span class='glyphicon glyphicon-refresh spinning'><\/span> Loading...<br\/><br\/><\/div>");
   //alert(1);
   //$("#form_body").append("<div id='firstLoadPage'><span class='glyphicon glyphicon-refresh spinning'><\/span> Loading...<br\/><br\/><\/div>");
   /*$("#bodyright").find('div.panel-body').attr('id', 'displayPage');
     $("#displayPage").attr('align', 'center');
     $("#displayPage").html('<span class="glyphicon glyphicon-refresh spinning"><\/span> Loading...<br\/><br\/>');*/
});


function afterLoad()
{
   //alert(1);
   //$("#loadingPage").hide();
   //$("#displayPage").show();
   //$("#form_body div:nth-child(2)").show();
   //$("#firstLoadPage").remove();
   //$.when(firstLoad()).then(afterLoad());

   fields = $("form[name!=frmMenu] :input:visible:not([readonly]):enabled");
   fields.each(function(i)
   {

      $(this).off("keyup.tab");
      $(this).off("keydown.tab");
      $(this).on("keyup.tab", function(e)
      {
         if ($(this).val().length >= $(this).attr('maxlength') && (e.keyCode != 9 && e.keyCode != 16 && e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40))
         {

            var index = fields.index(this);

            $('.datepicker').remove();
            if (index > -1 && (index + 1) < fields.length)
            {
               fields.eq(index + 1).focus();
            }
         }
      });

      $(this).on("keydown.tab", function(e)
      {
         if (e.keyCode == 9 && e.shiftKey == true)
         {
            var index = fields.index(this);
            $('.datepicker').remove();
            if (index == 0)
            {
               e.preventDefault();
               fields[fields.length - 1].focus();
            }
         }
         else if (e.keyCode == 9 && e.shiftKey == false)
         {
            var index = fields.index(this);
            $('.datepicker').remove();
            if (index == fields.length - 1)
            {
               e.preventDefault();
               fields[0].focus();
            }
         }

      });
   });
   //$(":input[readonly]").attr("tabindex", "-1");
   $(":input").not("select.select2-offscreen").removeAttr("tabindex");
   $(":input[readonly]").attr("tabindex", "-1");
   //$.when(firstLoad()).then(afterLoad());
   setTimeout(function()
   {
      $("#loader").fadeOut();
   }, 1000);
   ReloadDOMEvent();
   adjustForm();
   overridCreateGrid();
}

function ReloadDOMEvent()
{
   $("#reloading").bind("DOMSubtreeModified", function()
   {
      if (window.matchMedia('(max-width: 768px)').matches)
      {}
      else
      {
         adjustForm();
      }

   });
}

function adjustForm()
{
   if (window.matchMedia('(max-width: 768px)').matches)
   {

   }
   else
   {
      if ($("#reloading").html() != "")
      {
         $("form.form-horizontal.form-sm").css("max-height", "100vh").css("max-height", "-=125px").css("max-height", "-=" + $("#reloading").height() + "px");
      }
      else
      {
         $("form.form-horizontal.form-sm").css("max-height", "100vh").css("max-height", "-=125px");
      }
   }

}

$(window).resize(function()
{
   if ($("#menu_collapse").is(":visible"))
   {
      $("#reloading").css("margin-top", "auto");
   }
   else
   {
      if ($(window).scrollTop() < $(".panel-heading:first").outerHeight())
      {
         $("#reloading").css("position", "static");
         $("#reloading").css("margin-top", "45px");
      }
      else
      {
         $("#reloading").css("margin-top", "auto");
      }
   }
   if ($("#form_body").height() + $("#form_body").offset().top + 1 > $(window).height())
   {
      $("form.form-horizontal.form-sm").css("max-height", $("#form_body").height() - 100);
   }
   else
   {
      adjustForm();
   }

   if (window.matchMedia('(max-width: 768px)').matches)
   {
      $("#reloading").css("position", "relative");
      $("#reloading").css("top", "auto");

   }
   else
   {
      $("#reloading").css("position", "relative");
      $("#reloading").css("top", "auto");
      $("#reloading").css("margin-top", "auto");
      adjustForm();
   }
});
$(window).scroll(function()
{
   if (window.matchMedia('(max-width: 768px)').matches)
   {

      var repos = $("#form_body").offset().top - $("#reloading").outerHeight() - $(".panel-heading:first").outerHeight() - 5;
      if ($("#menu_collapse").is(":visible"))
      {
         $("#reloading").css("margin-top", "auto");
         if (($(".panel-heading:first").offset().top + $(".panel-heading:first").outerHeight() >= $("#reloading").offset().top) && !($(window).scrollTop() <= repos) && $(window).scrollTop() != 0)
         {

            $("#reloading").css("position", "fixed");
            $("#reloading").css("top", $(".panel-heading:first").outerHeight());
         }
         else
         {
            $("#reloading").css("position", "relative");
            $("#reloading").css("top", "auto");
         }
      }
      else
      {
         if ($(window).scrollTop() == 0)
         {
            $("#reloading").css("position", "static");
            $("#reloading").css("margin-top", "45px");
         }
         else
         {
            $("#reloading").css("margin-top", "auto");
            $("#reloading").css("position", "fixed");
            $("#reloading").css("top", $(".panel-heading:first").outerHeight());
         }
      }

   }
});

function overridCreateGrid()
{
   try
   {
      (function()
      {
         var oldVersion = createGrid;
         createGrid = function()
         {
            // do some stuff
            var result = oldVersion.apply(this, arguments);
            // do some more stuff
            setTimeout(function()
            {
               $("#masterGrid").setGridWidth(parseInt($("#barSearch").width()));
            }, 330);

            $(window).bind('resize', function()
            {
               $("#masterGrid").setGridWidth($("#barSearch").width());
            });
            return result;
         };
      })();
   }
   catch (e)
   {
      //console.log("No Grid");
   }

}

function logout()
{
   alert('logout');
}