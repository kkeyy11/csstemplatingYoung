const ymk = {
    index: (req, res) => {
        res.render('index', { currentPath: req.path });
    },

    about_tab: (req, res) => {
        res.render('aboutUs', { currentPath: req.path });
    },
    
    services_tab: (req, res) => {
        res.render('services', { currentPath: req.path });
    },
    
    contact_tab: (req, res) => {
        res.render('contact', { currentPath: req.path });
    }
};

module.exports = ymk;
