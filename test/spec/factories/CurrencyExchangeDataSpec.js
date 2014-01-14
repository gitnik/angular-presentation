describe('CurrencyExchangeData', function() {

    var $httpBackend, CurrencyExchangeData;

    beforeEach(
        inject(function($injector) {
            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.expectGET("app/exchangeData.json").respond(
                {"to": "EUR", "rate": 0.73236699999999999, "from": "USD"}
            );

            CurrencyExchangeData = $injector.get('CurrencyExchangeData');
        })
    );

    afterEach(function () {
        //$httpBackend.verifyNoOutstandingRequest();
        //$httpBackend.verifyNoOutstandingExpectation();
    });

   it('should exist', function() {
       expect(CurrencyExchangeData).toBeDefined();
   });

   it('should have a getData() function', function(){
       expect(CurrencyExchangeData.getData()).toBeDefined();
   });

   it('should return the correct response', function() {
       var data;
       CurrencyExchangeData.getData().then(function(response) {
           data = response;

           expect(data).toBe({"to": "EUR", "rate": 0.73236699999999999, "from": "USD"});
       });
   })
});
