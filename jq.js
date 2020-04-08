$('#listCryovialsTable tbody').on('click','td .addCryovialsAnchor',function(e){
            e.preventDefault();
            
            const valtopass=$(this).attr('data-indexVal');
            $(`#passDatatoAddCryovialForm${valtopass}`).submit();
    
        }); 
    <form method="post" name="passDatatoAddCryovialForm${data.lot_id}" id="passDatatoAddCryovialForm${data.lot_id}" action="/maintenance/add-cryovials">
                            <input type="hidden" name="cellId" value="${data.cell_id}"/>
                            <input type="hidden" name="cellNumber" value="${data.cell_number}"/>
                            <input type="hidden" name="lotNumber" value="${data.lot_number}"/>
                            <input type="hidden" name="lotId" value="${data.lot_id}"/>
                            <a href="#" class="addCryovialsAnchor"  data-indexVal="${data.lot_id}">Add Cryovials</a>
                            </form> 

router.post('/maintenance/add-cryovials', (req, res) => {
      const currentUser = req.session.user;
      dbFunction.getSites(enums.SiteStatus.ACTIVE, (err, data) => {
        data.prevData = req.body;
        res.render('maintenance/add-cryovials', { currentUser, data: data });
      })
    }); 
    router.post('/maintenance/add-cryovials', (req, res) => {
      const currentUser = req.session.user;
      dbFunction.getSites(enums.SiteStatus.ACTIVE, (err, data) => {
        data.prevData = req.body;
        res.render('maintenance/add-cryovials', { currentUser, data: data });
      })
    }); 
    