const stackIcon = (iconMain, iconSub) => {
    const stackedIcon = document.createElement('span');
    stackedIcon.classList.add('fa-stack');

    const mainIcon = document.createElement('i');
    mainIcon.classList.add('fas', iconMain, 'fa-stack-1x');

    const subIcon = document.createElement('i');
    subIcon.classList.add('fas', iconSub, 'fa-stack-1x', 'fa-inverse');

    stackedIcon.appendChild(mainIcon);
    stackedIcon.appendChild(subIcon);

    return stackedIcon;
};
const renderStackedIcon = () => {
    const iconContainer = document.getElementById('stackedIconContainer');
    const iconMain = 'far fa-circle'; // Replace with your iconMain class
    const iconSub = 'fas fa-ellipsis-h'; // Replace with your iconSub class

    const stackedIcon = stackIcon(iconMain, iconSub);

    iconContainer.appendChild(stackedIcon);
};

// Call the function to render the stacked icon
export default renderStackedIcon;