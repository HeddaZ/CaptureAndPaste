<?php

class CaptureAndPastePlugin extends MantisPlugin
{
    function register()
    {
        $this->name = "Capture And Paste";
        $this->description = "Image Capturer for Uploading. Capture screenshot and directly paste into the file uploder.";

        $this->version = '2.0';
        $this->requires = array(
            'MantisCore' => '2.0.0',
        );

        $this->author = 'Hedda Zhang';
        $this->contact = 'heddaz@live.com';
        $this->url = 'https://github.com/heddaz';
    }

    function config()
    {
        return array();
    }

    function hooks()
    {
        $t_hooks = array(
            'EVENT_REPORT_BUG_FORM' => 'resources',
            'EVENT_VIEW_BUG_DETAILS' => 'resources',
        );
        return $t_hooks;
    }

    function resources()
    {
        config_set('dropzone_enabled', OFF);

        echo '<script src="' . plugin_file('paste.js') . '" type="text/javascript"></script>';
        echo '<script src="' . plugin_file('captureandpaste.js') . '" type="text/javascript"></script>';
    }
}
