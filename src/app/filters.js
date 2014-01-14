angular.module('SampleApp.filters', []).
filter("DummyFilter", function() {
    return function(dummyVar) {
        return dummyVar.toString().toUpperCase();
    }
});
