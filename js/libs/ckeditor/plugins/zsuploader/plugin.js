// Copyright (c) 2015, Fujana Solutions - Moritz Maleck. All rights reserved.
// For licensing, see LICENSE.md

CKEDITOR.plugins.add( 'zsuploader', {
    init: function( editor ) {
        editor.config.filebrowserBrowseUrl = '/js/libs/ckeditor/plugins/zsuploader/uploader.php';
    }
});

