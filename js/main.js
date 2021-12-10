$(document).ready(function() {

    $("#feature1").click(function() {
      $("#price-compare-table2").slideToggle("slow");
    });
  
    $("#ma-switch").click(function() {
      var val = $("#ma-switch").val();
      var checked = $("#ma-switch").is(":checked");
      var dd = $("#selfHostDD2").val();
      //console.log(val);
      if(checked == true) {
        $("#ma-switch").val('1');
        $(val).attr('data-val', '1');
        $("#monthlyannual").text("Annually");
        $("#monthlyannual1").text("Annually");
        $("#monthlyannual2").text("Annually");
        $("#monthlyannual3").text("Annually");
        $("#cycle1").text("Annually");
        $("#cycle2").text("Annually");
        $("#cycle3").text("Annually");
        $("#consPrice31").text("47");
        $("#consPrice32").text("147");
        $("#priceEs1").text("$47");
        $("#pricePro1").text("$147");
        $("#btn-free").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=63&billingcycle=annually");
        $("#btn-personal").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=annually");
        $("#btn-pro").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=55&billingcycle=annually");
        if(dd == 1) {
          $("#consPrice33").text("267");
          $("#pricePro2").text("$267");
          $("#f2user").val("1");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=42");
        } else if (dd == 2) {
          $("#consPrice33").text("367");
          $("#pricePro2").text("$367");
          $("#f2user").val("2");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=39");
        } else if (dd == 3) {
          $("#consPrice33").text("467");
          $("#pricePro2").text("$467");
          $("#f2user").val("3");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=40");
        } else {
          $("#consPrice33").text("967");
          $("#pricePro2").text("$967");
          $("#f2user").val("4");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=41");
          
        }
      } else {
        $("#ma-switch").val('0');
        $(val).attr('data-val', '0');
        $("#monthlyannual").text("Monthly");
        $("#monthlyannual1").text("Monthly");
        $("#monthlyannual2").text("Monthly");
        $("#monthlyannual3").text("Monthly");
        $("#cycle1").text("Monthly");
        $("#cycle2").text("Monthly");
        $("#cycle3").text("Monthly");
        $("#consPrice31").text("7");
        $("#consPrice32").text("17");
        $("#priceEs1").text("$7");
        $("#pricePro1").text("$17");
        $("#btn-free").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=63&billingcycle=monthly");
        $("#btn-personal").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=monthly");
        $("#btn-pro").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=55&billingcycle=monthly");
        if(dd == 1) {
          $("#consPrice33").text("27");
          $("#pricePro2").text("$27");
          $("#f2user").val("1");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=42");
        } else if (dd == 2) {
          $("#consPrice33").text("37");
          $("#pricePro2").text("$37");
          $("#f2user").val("2");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=39");
        } else if (dd == 3) {
          $("#consPrice33").text("47");
          $("#pricePro2").text("$47");
          $("#f2user").val("3");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=40");
        } else {
          $("#consPrice33").text("97");
          $("#pricePro2").text("$97");
          $("#f2user").val("4");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=41");
        }
      }
    });
  
    $("#f2user").change(function() {
      var val = $(this).val();
      var check = $("#ma-switch").is(":checked");
      if(val == 1) {
        if(check == false) {
          $("#pricePro2").text("$27");
        } else {
          $("#pricePro2").text("$267");
        }
      } else if(val == 2) {
        if(check == false) {
          $("#pricePro2").text("$37");
        } else {
          $("#pricePro2").text("$367");
        }
      } else if(val == 3) {
        if(check == false) {
          $("#pricePro2").text("$47");
        } else {
          $("#pricePro2").text("$467");
        }
      } else {
        if(check == false) {
          $("#pricePro2").text("$97");
        } else {
          $("#pricePro2").text("$967");
        }
      }
    });
  
    $("#pricing #selfHostDD2").change(function() {
      var val = $(this).val();
      var check = $("#ma-switch").is(":checked");
      if(val == 1) {
        if(check == false) {
          $("#consPrice33").text("27");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=42");
        } else {
          $("#consPrice33").text("267");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=42");
        }
      } else if(val == 2) {
        if(check == false) {
          $("#consPrice33").text("37");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=39");
        } else {
          $("#consPrice33").text("367");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=39");
        }
      } else if(val == 3) {
        if(check == false) {
          $("#consPrice33").text("47");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=40");
        } else {
          $("#consPrice33").text("467");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=40");
        }
      } else {
        if(check == false) {
          $("#consPrice33").text("97");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=41");
        } else {
          $("#consPrice33").text("967");
          $("#btn-com").attr("href", "https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=annually&configoption[11]=41");
        }
      }
    });
  
  });