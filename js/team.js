---
---

//fills all the authors data into one dict (dict because accessing n-th element is
// faster then iterating over entire array)
var membersDataDict = {};
{% for member_hash in site.data.authors %}
{% assign member = member_hash[1] %}
membersDataDict["{{member.name}}"] = {};
{% if member.twitter %}membersDataDict["{{member.name}}"]["twitter"] = "{{member.twitter}}";{% endif %}
{% if member.googleplus %}membersDataDict["{{member.name}}"]["googleplus"] = "{{member.googleplus}}";{% endif %}
{% if member.github %}membersDataDict["{{member.name}}"]["github"] = "{{member.github}}";{% endif %}
{% endfor %}

//add angular app
angular.module('team', []).controller('teamController', function($scope, $http) {
    var team = this;
    team.members = [];

    //TODO: change url to the real one
    $http.get('{{ site.baseurl }}/api/team')
        .success(function(data) {

            //push all non bot members (slackbot has to be eliminated the ugly way)
            angular.forEach(data.members, function (member) {
                if (!member.is_bot && member.name != "slackbot"){
                    //if image is blank, set url to default image
                    if(member.profile.image_192.indexOf("MISSING") != -1){
                        member.profile.image_192 = "{{ site.baseurl }}/images/ic_account_circle.png";
                        member.profile.image_512 = "{{ site.baseurl }}/images/ic_account_circle.png";
                    }

                    //add twitter, googleplus and github data if it exists
                    try {
                        if(membersDataDict[member.real_name]["twitter"] != undefined)
                            member.twitter = membersDataDict[member.real_name]["twitter"];
                    }catch(err){}
                    try {
                        if(membersDataDict[member.real_name]["googleplus"] != undefined)
                            member.googleplus = membersDataDict[member.real_name]["googleplus"];
                    }catch(err){}
                    try {
                        if(membersDataDict[member.real_name]["github"] != undefined)
                            member.github = membersDataDict[member.real_name]["github"];
                    }catch(err){}

                    //change timezone to its abbreviation
                    try {
                        member.tz = moment().tz(member.tz).format('z');
                    } catch (err) {
                        console.warn(err);
                    }

                    //push into members array
                    team.members.push(member);
                }
            });
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
});
