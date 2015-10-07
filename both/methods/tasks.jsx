
Meteor.methods({
    addTask(text){
         Tasks.insert({
             text: text,
             created: new Date(),
             username: 'Eden Hazard'
         });
    },

    removeTask(id) {
        Tasks.remove(id);
    },

    setChecked(id, check) {
        Tasks.update(id, { $set : { checked: check }});
    }
});
