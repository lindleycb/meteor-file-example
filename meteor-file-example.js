if (Meteor.isClient) {

    Template.fileUpload.helpers({
        files: function() {
            return this.files.find();
        }
    });

    Template.fileUploadRow.helpers({
        uploadProgress: function() {
            return this.uploadProgress || 0;
        },
        uploadCompleteClass: function() {
            return (this.uploadProgress==100)?'progress-bar-success':'';
        }
    });
}

if (Meteor.isServer) {
    Meteor.methods({
        uploadFile: function(file) {
            //console.log('uploadFile: '+JSON.stringify(_.omit(file, 'data'), null, '  '));
            file.save('/tmp');
        }
    });
}
