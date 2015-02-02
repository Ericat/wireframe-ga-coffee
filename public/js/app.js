$(function() {

function OrderViewModel() {
  var self = this;

  // this.orderSummary = ko.observable('');
  this.types = ko.observableArray(['Black', 'Latte', 'Espresso']);
  this.sizes = ko.observableArray(['S', 'M', 'L']);
  this.extras = ko.observableArray(['Whole', 'Skim', 'Soya']);
  this.customerName = ko.observable($('input[name="customerName"]').val());
  this.count = ko.observable(0);
  this.orderCount = ko.computed(function() {
    return self.count() + 'x';
  });
  this.showNext = ko.observable(false);
  this.showOrderSummary = ko.observable(false);
  this.showNoMilk = ko.observable(false);
  this.selectedType = ko.observable('');
  this.selectedSize = ko.observable('');
  this.selectedExtra = ko.observable('');
}

OrderViewModel.prototype.hasSelectedType = function(el, event) {
  orderModel.showOrderSummary(true);
  orderModel.selectedType(el);
};

OrderViewModel.prototype.hasSelectedSize = function(el, event) {
  orderModel.selectedSize(el);
};

OrderViewModel.prototype.hasSelectedExtra = function(el, event) {
  orderModel.selectedExtra(el);
  orderModel.showNoMilk(true);
};

OrderViewModel.prototype.hasClickedAdd = function() {
  var self = this;

  this.showNext(true);
  this.count(self.count() + 1);
  console.log('Has clicked add order!');

  // post request to /order to save our order to our DB

};

OrderViewModel.prototype.hasClickedNext = function() {
  this.resetForm();
}

OrderViewModel.prototype.resetForm = function() {
  this.showNext(false);
  this.showOrderSummary(false);
  this.customerName('');
  document.querySelector('svg#tick').style.display = 'none';
}

var orderModel = new OrderViewModel();

setTimeout(function() {
  window.orderModel = orderModel;
  ko.applyBindings(orderModel);
}, 1);

});