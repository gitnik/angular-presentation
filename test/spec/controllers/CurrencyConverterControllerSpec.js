describe('CurrencyConverterController', function() {

    var controller, $rootScope, CurrencyExchangeData;
    beforeEach(
        inject(function($injector, $q) {
            var deferred = $q.defer();
            deferred.resolve('{"to": "EUR", "rate": 0.73236699999999999, "from": "USD"}');

            CurrencyExchangeData = $injector.get('CurrencyExchangeData');

            $rootScope = $injector.get('$rootScope');

            controller = $injector.get('CurrencyConverterController');

            spyOn(CurrencyExchangeData, 'getData').and.returnValue(deferred.promise);
        })
    );

    it('should have the correct attributes',
        inject(function(controller) {
            expect(controller.getExchangeRate()).toBe('0.7323');
        })
    );
});
