import React, { useState } from "react";
import SearchIcon from '@material-ui/icons/Search';
import { useMediaQuery } from 'react-responsive';

export default function () {
    const isMobile = useMediaQuery({
        query: '(max-device-width: 768px)'
    });
    return (
        <div className="search-box">
            {!isMobile &&

                <form class="form-inline ml-auto">
                    <div class="md-form my-0">
                        <input list="browsers" name="browser" class="form-control" type="text" placeholder="Search" aria-label="Search" style={{ width: "150px", height: "30px" }} />
                        <button href="#!" className="btn btn-outline-white btn-sm my-0 ml-sm-2" type="submit"><SearchIcon style={{ color: "white" }} /></button>
                        <datalist id="browsers" >
                            <option value="IC Engines" />
                            <option value="Differential" />
                            <option value="Clutch" />
                            <option value="Brakes" />
                            <option value="Gears" />
                        </datalist>
                    </div>

                </form>
            }
            {isMobile &&
                <form class="form-inline ml-auto">
                    <span class="md-form my-0">
                        <span>
                            <input list="browsers" name="browser" class="form-control" type="text" placeholder="Search" aria-label="Search" style={{ width: "150px", height: "30px", float: "left", paddingTop: "2.5%" }} />
                            <button href="#!" class="btn btn-outline-white btn-sm my-0 ml-sm-2" type="submit" style={{ display: "inline" }}><SearchIcon style={{ color: "white" }} /></button>
                        </span>
                        <datalist id="browsers" >
                            <option value="IC Engines" />
                            <option value="Differential" />
                            <option value="Clutch" />
                            <option value="Brakes" />
                            <option value="Gears" />
                        </datalist>
                    </span>

                </form>
            }
        </div>
    );

}

