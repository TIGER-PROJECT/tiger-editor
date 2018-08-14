module.exports = [
    {
        label  : 'File',
        submenu: [
            {
                label  : 'New',
                submenu: [
                    {
                        label: 'Project',
                        click () {
                            console.log('New project');
                        }
                    }
                ]
            },
            {label: 'Open'},
            {label: 'Save'},
            {label: 'Save as'},
            {label: 'Close'}
        ]
    },
    {
        label  : 'Edit',
        submenu: [
            {role: 'undo'},
            {role: 'redo'},
            {type: 'separator'},
            {role: 'cut'},
            {role: 'copy'},
            {role: 'paste'},
            {role: 'pasteandmatchstyle'},
            {role: 'delete'},
            {role: 'selectall'}
        ]
    },
    {
        label  : 'View',
        submenu: [
            {label: 'Reset'}
        ]
    },
    {
        label  : 'Game',
        submenu: [
            {label: 'Start'},
            {label: 'Stop'},
            {label: 'Reload'},
            {label: 'Open in browser'}
        ]
    },
    {
        label  : 'Settings',
        submenu: [
            {label: 'Project'},
            {label: 'Editor'},
            {label: 'Account'}
        ]
    },
    {
        label  : 'Export',
        submenu: [
            {
                label  : 'Desktop',
                submenu: [
                    {label: 'Windows'},
                    {label: 'Mac'},
                    {label: 'Linux'}
                ]
            },
            {
                label  : 'Mobile',
                submenu: [
                    {label: 'Android'},
                    {label: 'IOS'},
                    {label: 'Other'}
                ]
            },
            {label: 'Web'}
        ]
    },
    {
        label  : 'DEBUG',
        submenu: [
            {role: 'reload'},
            {role: 'forcereload'},
            {role: 'toggledevtools'},
            {type: 'separator'},
            {role: 'resetzoom'},
            {role: 'zoomin'},
            {role: 'zoomout'},
            {type: 'separator'},
            {role: 'togglefullscreen'}
        ]
    },
    {
        role   : 'window',
        submenu: [
            {role: 'minimize'},
            {role: 'close'}
        ]
    },
    {
        role   : 'help',
        submenu: [
            {
                label: 'Learn More',
                click () {
                    require('electron').shell.openExternal('https://electron.atom.io');
                }
            },
            {
                label: 'About',
                click () {
                    this.$store.dispatch('showDialog', {
                        modal: 'about',
                        show : true
                    });
                }
            }
        ]
    }
];
