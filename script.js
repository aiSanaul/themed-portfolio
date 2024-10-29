function toggleSection(section) {
    const sections = ['landing', 'projects', 'work', 'about', 'social', 'others'];
    sections.forEach(sec => {
        document.getElementById(sec).style.display = (sec === section) ? 'grid' : 'none';
    });

    // Reset all margins first
    document.querySelectorAll('.option').forEach(opt => {
        opt.style.marginBottom = '6px';
    });

    // Apply margin to the active option
    const optionMapping = {
        'projects': 'option1',
        'work': 'option2',
        'about': 'option3',
        'social': 'option4',
        'others': 'option5'
    };
    document.getElementById(optionMapping[section]).style.marginBottom = '0px';
}
