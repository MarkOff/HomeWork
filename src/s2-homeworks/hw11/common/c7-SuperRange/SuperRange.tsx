import React from 'react'
import {Box, Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '100%',
                margin: '0px 15px 0px 10px',
                color: '#8B8B8B',
                height: 3,
                padding: '20px 0px',
                '& .MuiSlider-thumb': {
                    height: 16,
                    borderRadius: 5,
                    backgroundColor: '#fff',
                    border: '1px solid',
                    color: '#00CC22'
                },
                '& .MuiSlider-track': {
                    height: 4,
                    color: '#00CC22'
                },
                '& .MuiSlider-thumb:after': {
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#00CC22  '
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

