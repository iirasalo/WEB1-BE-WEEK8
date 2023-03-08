router.get('/:id', function(req, res) {
    /*  
    #swagger.tags = ['Users];
    #swagger.summary = 'Get user by ID';
    #swagger.description = 'API to get user based on user ID';
    #swagger.consumes = ['application/json'];
    #swagger.parameters['id'] = {
            in: 'path',
            required: true,
            type: 'number',
            description: 'User ID that will be search',
            example: 1
    }
    #swagger.responses[200] = {
              description: 'User successfully obtained.',
              schema: { 
                data: 1,
              }
    }
    
    #swagger.security = [{
                 "bearer": []
          }] 
    */
    res.json({
      data: req.params.id,
    });
  });