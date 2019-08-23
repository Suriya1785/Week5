/* Script to support single page app - product catalog
 * Author: HartCode programmer
 * Date: 08/22/2019
 */
"Use Strict";
/* window onload/ready function to load page with course details and assign reference to event handler */
$(function() {
    // course id is pulled from url for server call
    let errorMsgIdField = $("#errorMsgId");

    // Store the JSON data in javaScript objects.  
    $.getJSON("/api/categories/", function(data) {
            categories = data;
        })
        .done(function() {
            // upon successful AJAX call perform the below
            loadCategories(categories);
            $("#categoryContainer").hide();
            $("#productsDiv").hide();
            $("#productsContainer").hide();
        })
        .fail(function() {
            // upon failure response, send message to user
            errorMsg = "Failure to get server data, please refresh the page"
            errorMsgIdField.html(errorMsg);
            errorMsgIdField.addClass("badInput");
        });

    $("#viewCategories").on("click", function() {
        $("#viewCategories").prop("disabled", true);
        $("#categoryContainer").show();
    })



})

/* function is to load product categories during onload process
 * @param categories (javastring object) - contains selected course detail
 * @param errorMsgIdField (jquery reference to error message id) - sets error/informational message
 * calls: getProducts() 
 */
function loadCategories(categories, errorMsgIdField) {
    $("#productsList").empty();
    $.each(categories, function(key, value) {
        $("#categoryList").append($("<a/>")
            .text(value.Category)
            .attr("href", "#")
            .attr("class", "dropdown-item")
            .on("click", function(e) {
                e.preventDefault();
                $("#productsList").empty();
                $("#categoryName").text(value.Category);
                getProducts(value.Value);
                $("#productsContainer").show();
            }))
    })
}

/* function is to list of products under selected category
 * @param category (javastring object) - contains selected category
 * calls: loadProducts() 
 */
function getProducts(category) {
    //Hides the product card during category selection
    $("#productCard").hide();
    $.getJSON("/api/products/bycategory/" + category, function(data) {
            products = data;
        })
        .done(function() {
            // upon successful AJAX call perform the below
            loadProducts(products);
        })
        .fail(function() {
            // upon failure response, send message to user
            errorMsg = "Failure to get server data, please refresh the page"
            $("errorMsgId").html(errorMsg);
            $("errorMsgId").addClass("badInput");
        });
}

/* function is to product details under selected product  
 * @param products (javastring object) - contains selected product object
 * calls: None
 */
function loadProducts(products) {
    $.each(products, function(key, value) {
            $("#productsList").append($("<li/>")
                .text(value.ProductName)
                .attr("class", "list-group-item list-group-item-action")
                .on("click", function(e) {
                    e.preventDefault();
                    getProduct(value.ProductID);
                }))
        })
        // Shows the product card div to show the details of the selected product
    $("#productsDiv").show();
}

/* function is to get product details from server by making Ajax call 
 * @param product (javastring object) - contains selected product object
 * calls: loadProduct ()
 */

function getProduct(product) {
    $.getJSON("/api/products/" + product, function(data) {
            productItem = data;
        })
        .done(function() {
            // upon successful AJAX call perform the below
            loadProduct(productItem);
        })
        .fail(function() {
            // upon failure response, send message to user
            errorMsg = "Failure to get server data, please refresh the page"
            $("errorMsgId").html(errorMsg);
            $("errorMsgId").addClass("badInput");
        });
}

/* function is to update product card from the server returned product object 
 * @param productItem (javastring object) - contains selected product object details
 * calls: None
 */
function loadProduct(productItem) {
    $("#productId").html(productItem.ProductID);
    $("#productName").html(productItem.ProductName);
    $("#unitPriceName").html(productItem.UnitPrice);
    $("#productCard").show();
}