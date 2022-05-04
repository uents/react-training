import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import EventNoteIcon from '@mui/icons-material/EventNote';
import PeopleIcon from '@mui/icons-material/People';
import StarsIcon from '@mui/icons-material/Stars';
import FlagIcon from '@mui/icons-material/Flag';
import DraftsIcon from '@mui/icons-material/Drafts'

const MenuItems = (props) => {
    return (
        <>
            <MenuItem onClick={props.onClick}>
                <ListItemIcon>
                    <EventNoteIcon />
                </ListItemIcon>
                <ListItemText>
                    スケジュール
                </ListItemText>
            </MenuItem>
            <MenuItem onClick={props.onClick}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText>
                    プレイヤー
                </ListItemText>
            </MenuItem>
            <MenuItem onClick={props.onClick}>
                <ListItemIcon>
                    <StarsIcon />
                </ListItemIcon>
                <ListItemText>
                    順位表
                </ListItemText>
            </MenuItem>
            <MenuItem onClick={props.onClick}>
                <ListItemIcon>
                    <FlagIcon />
                </ListItemIcon>
                <ListItemText>
                    結果報告
                </ListItemText>                        
            </MenuItem>
            <MenuItem onClick={props.onClick}>
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText>
                    アンケート
                </ListItemText>                        
            </MenuItem>
        </>
    );
};

export default MenuItems;
