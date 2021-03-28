const initialState = {
    danhSachCuoc: [
        {ma: 'ga', hinhAnh: './images/baitapgamebocua/ga.png', diemCuoc: 0},
        {ma: 'bau', hinhAnh: './images/baitapgamebocua/bau.png', diemCuoc: 0},
        {ma: 'ca', hinhAnh: './images/baitapgamebocua/ca.png', diemCuoc: 0},
        {ma: 'nai', hinhAnh: './images/baitapgamebocua/nai.png', diemCuoc: 0},
        {ma: 'cua', hinhAnh: './images/baitapgamebocua/cua.png', diemCuoc: 0},
        {ma: 'tom', hinhAnh: './images/baitapgamebocua/tom.png', diemCuoc: 0}
    ],
    tongThuong: 1000,
    mangXucXac: [
        {ma: 'nai', hinhAnh: './images/baitapgamebocua/nai.png', diemCuoc: 0},
        {ma: 'cua', hinhAnh: './images/baitapgamebocua/cua.png', diemCuoc: 0},
        {ma: 'tom', hinhAnh: './images/baitapgamebocua/tom.png', diemCuoc: 0}
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {
    case 'DAT_CUOC_BAU_CUA': {
        // Tìm trong state, danhsachCuoc, quân cược nào được click sẽ thực thi nghiệp vu tăng giảm
        const danhSachCuocUpdate = [...state.danhSachCuoc];
        let index = danhSachCuocUpdate.findIndex(qc => qc.ma === action.quanCuoc.ma);
        if(index!=-1){
            if(action.tangGiam && state.tongThuong > 0){
                danhSachCuocUpdate[index].diemCuoc += 100;
                state.tongThuong -= 100;
            }else{
                if(danhSachCuocUpdate[index].diemCuoc > 0){
                    danhSachCuocUpdate[index].diemCuoc -= 100;
                    state.tongThuong += 100;
                }
            }
        }
        // danhSachCuoc: kiểu ref nên cần tạo bản copy danhSachCuocUpdate, tongThuong kieu nguyên thủy nên gán trực tiếp
        state.danhSachCuoc = danhSachCuocUpdate;
        return {...state}
    }

    case 'PLAY_GAME_BAU_CUA':{
        const mangXucXacNgauNhien = [];
        for(let i=0; i<3; i++){
            // Tao so ngau nhien tu 0-5
            let soNgauNhien = Math.floor(Math.random()*6);
            const xucXacNgauNhien = state.danhSachCuoc[soNgauNhien];
            mangXucXacNgauNhien.push(xucXacNgauNhien);
        }
        // Cap nhat lai mangXucXac
        state.mangXucXac = mangXucXacNgauNhien;
        // Xu ly tang tongThuong
        mangXucXacNgauNhien.forEach((xucXacNN, index) =>{
            let indexDSCuoc = state.danhSachCuoc.findIndex(qc=> qc.ma === xucXacNN.ma);

            if(indexDSCuoc!==-1){
                state.tongThuong += state.danhSachCuoc[indexDSCuoc].diemCuoc;
            }
        })
        // XỬ lý hoàn tiền
        state.danhSachCuoc.forEach((qc, index) => {
            let indexXucXacNN = mangXucXacNgauNhien.findIndex(xxnn =>xxnn.ma === qc.ma);
            if(indexXucXacNN !== -1){
                state.tongThuong += qc.diemCuoc;
            }
        })
        // Xu ly làm mới game
        state.danhSachCuoc = state.danhSachCuoc.map((qc, index) => {
            return {...qc, diemCuoc: 0}
        })

        return {...state};
    }

    case 'CHOI_LAI': {
        state.tongThuong = 1000;
        state.danhSachCuoc = state.danhSachCuoc.map((qc, index) =>{
            return {...qc, diemCuoc: 0}
        })
        return {...state};
    }
    default:
        return state
    }
}
