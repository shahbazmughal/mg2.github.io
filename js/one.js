var KTIONRangeSlider = function() {
	var $ = jQuery.noConflict();
	var demos = function () {

        var $c2 = $("#contact11");
        // using postfixes
        $("#contact11").ionRangeSlider({
            type: "single",
            skin: "big",
            grid: true,
            min: 1000,
            max: 1000000,
            from: 0,
            onStart: function (data) {
                 var names = ["1 - 1,000","1,001 - 5,000","5,001 - 25,000","25,001 - 50,000","50,001 - 100,000","100,000 - 250,000","250,001 - 1,000,000","Custom"];
                 //$(".irs-single").html(names[data.from]);
                  console.log(names[data.from]);
                  setTimeout(function() {
                    $(".irs-single").html(names[0]);
                  },1);
              
            },
             onFinish: function (data) {
                 var names = ["1 - 1,000","1,001 - 5,000","5,001 - 25,000","25,001 - 50,000","50,001 - 100,000","100,000 - 250,000","250,001 - 1,000,000","Custom"];
                 $(".irs-single").html(names[data.from]);
              
            },

            

            values:["1000","5000","25000","50000","100000","250000","1000000","25000+"]            });

        $("#contact11").on("change", function () {
            var pp1 = $("#pp1").val();
            var $inp2 = $(this);
            var from5 = $inp2.prop("value"); 
            $("#no_of_contacts").val(from5);
            var from6 = $inp2.data("from");
            var email_limit = from5 * 12;
            //console.log(email_limit);
            var result2 = 12 + parseFloat(((2)*from6).toFixed(2));
            var prices = ["0.00","17.00","67.00","117.00","197.00","397.00","797.00","0.00"];
            var pids = ["57","58","59","60","61","81","82","62"];
            var names = ["1 - 1,000","1,001 - 5,000","5,001 - 25,000","25,001 - 50,000","50,001 - 100,000","100,000 - 250,000","250,001 - 1,000,000","Custom"];
            var no_of_emails = ["1000","5000","25000","50000","100000","250000","1000000","25000+"];
            var monthly_emails = ["Monthly Emails"," Unlimited\r"];
            var transactional = ["6000","Unlimited","Unlimited","250000","500000","1250000","5000000","50000+"];
            var segments = ["1","3","5","10","20","50","100","10+"];
            var triggers = ["100","1000","5000","10000","20000","30000","50000","5+"];
            var monthly_emails_array = ["200","5000","25000","50000","100000","250000","1000000","Unlimited"];
            var ip_array = ["0","2","4","8","16","32","64","Dedicated"];
            var array_count = 6;
           
            if(Number(prices[from6]) < 0) { 
                var total_price = "Free";
            }  else { 
                var total_price = "$" + prices[from6];
            }
            if (Number(array_count) + 1  == from6)
            {
                 var total_price = "Custom";
            }

               $("#Contacts").html(no_of_emails[from6]);
               $(".irs-single").html(names[from6]);

               $("#MonthlyEmails").html(monthly_emails_array[from6]);
               $("#Transactional").html(transactional[from6]);
               $("#Segments").html(segments[from6]);
               $("#Triggers").html(triggers[from6]);
               $("#IP").html(ip_array[from6]);

               if(from6 <= array_count) { 
                   $("#ContactsPerccent").html((no_of_emails[from6] / no_of_emails[array_count]) * 100 + "%");
                   $("#contacts-progress").attr("aria-valuenow", (no_of_emails[from6] / no_of_emails[array_count]) * 100);
                   $("#contacts-progress").css("width", (no_of_emails[from6] / no_of_emails[array_count]) * 100 + "%");

                   $("#TransactionalPerccent").html((transactional[from6] / transactional[array_count]) * 100 + "%");
                   $("#transactional-progress").attr("aria-valuenow", (transactional[from6] / transactional[array_count]) * 100);
                   $("#transactional-progress").css("width", (transactional[from6] / transactional[array_count]) * 100 + "%");

                   $("#SegmentsPerccent").html((segments[from6] / segments[array_count]) * 100 + "%");
                   $("#segments-progress").attr("aria-valuenow", (segments[from6] / segments[array_count]) * 100);
                   $("#segments-progress").css("width", (segments[from6] / segments[array_count]) * 100 + "%");

                   $("#TriggersPerccent").html((triggers[from6] / triggers[array_count]) * 100 + "%");
                   $("#triggers-progress").attr("aria-valuenow", (triggers[from6] / triggers[array_count]) * 100);
                   $("#triggers-progress").css("width", (triggers[from6] / triggers[array_count]) * 100 + "%");
               }
               

                //$(".emails12").html(from5+" <span>contacts</span>");
                //$(".emails12").html(names[from6]+" <span>contacts</span>");
                $("#base-contacts").html(from5);
                $(".base-block>h5").html(names[from6]);
                $("#product-name").html(names[from6]);
                
                if(total_price == "Custom") { 
                    $("#buy").html("Contact Sales");
					$("#buy").attr("href", 'https://mumara.com/contact-us/');
                } else { 
                    $("#buy").html("Order Now");
					$("#buy").attr("href" , "https://one.mumara.com/signup?pid=" + pids[from6] );
                }
                
                
                $(".plan").html("<h5 id='pricemain'>" + total_price + "</h5><h5> / month</h5>");
                if(Number(prices[from6]) > 0) { 
                    $("#panel-head-price").html("<strong>" + total_price + " USD</strong>");
                } else { 
                    $("#panel-head-price").html("<strong>" + total_price + " </strong>");
                }

                $("#total-cost").html("$<span>"+result2+"</span> / month");
                $(".emails22").html(email_limit);
                $("#amount").val(prices[from6]);
            
        });
    }

    return {
        // public functions
        init: function() {
            demos(); 
        }
    };
}();


jQuery(document).ready(function() {
	KTIONRangeSlider.init();
	setTimeout(function() {
      jQuery("#loading").hide();
  }, 2000);
});