var headerControler = app.controller('headerController', ['$scope', function($scope) {
  $scope.name = 'Kevin Mendoza Tudares';
  $scope.university = 'Northwestern University';
  $scope.school = 'McCormick School of Engineering';
  $scope.major = "Computer Science '22";
  $scope.pronouns = 'he/him/his';
}]);

var linkToController = app.controller('linkToController', ['$scope', function($scope) {
  $scope.links = [
    {
      link: 'https://kevinamendoza.github.io/assets/resume-kmt.pdf',
      icon: 'fa-file-text-o',
      title: 'Resume'
    },
    {
      link: 'https://www.linkedin.com/in/kevinamendoza/',
      icon: 'fa-linkedin',
      title: 'LinkedIn'
    },
    {
      link: 'https://github.com/kevinamendoza/',
      icon: 'fa-github-alt',
      title: 'GitHub'
    },
    {
      link: 'https://www.kaggle.com/kevinamendoza',
      icon: 'fa-kaggle',
      title: 'Kaggle'
    }
  ];
}]);
