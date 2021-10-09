const voters =[ {name:'Bob' , age: 30, voted: true},
{name:'Jake' , age: 32, voted: true},
{name:'Kate' , age: 25, voted: false},
{name:'Sam' , age: 20, voted: false},
{name:'Phil' , age: 21, voted: true},
{name:'Ed' , age:55, voted:true},
{name:'Tami' , age: 54, voted:true},
{name: 'Mary', age: 31, voted: false},
{name: 'Becky', age: 43, voted: false},
{name: 'Joey', age: 41, voted: true},
{name: 'Jeff', age: 30, voted: true},
{name: 'Zack', age: 19, voted: false} ];

const ages = {
    young: {
        min: 18,
        max: 25
    },
    mid: {
        min: 26,
        max: 35
    },
    old: {
        min: 36,
        max: 55
    }
};

let handleVoter = (votes, people) => (totals, voter) => ({
    ...totals,
    [votes]: voter.voted ? totals[votes] + 1 : totals[votes],
    [people]: totals[people] + 1,
});

let handleYoungVoter = handleVoter('youngVotes', 'youngPeople');
let handleMidVoter = handleVoter('midVotes', 'midPeople');
let handleOldVoter = handleVoter('oldVotes', 'oldPeople');

function getResults(array) {
    return array.reduce(
        (totals, current) => {
            if (current.age >= ages.young.min && current.age <= ages.young.max) {
                return handleYoungVoter(totals, current)
            }
            else if (current.age >= ages.mid.min && current.age <= ages.mid.max) {
                return handleMidVoter(totals, current)
            }
            else if (current.age >= ages.old.min && current.age <= ages.old.max) {
                return handleOldVoter(totals, current)
            }
        },
        {
            youngVotes: 0,
            youngPeople: 0,
            midVotes: 0,
            midPeople: 0,
            oldVotes: 0,
            oldPeople: 0,
        }
    );
};

console.log(getResults(voters));