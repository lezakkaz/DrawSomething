# How to use

    $ git clone https://github.com/lezakkaz/DrawSomething.git
    $ cd DrawSomething/examples/RNN_Tutorial/
    $ mkdir rnn_tutorial_dataset
    $ mkdir rnn_tutorial_data
    $ gsutil -m cp "gs://quickdraw_dataset/full/simplified/*" rnn_tutorial_dataset

##

## create_dataset.py

### Mac or Linux

    $ python3 create_dataset.py --ndjson_path rnn_tutorial_dataset \
      --output_path rnn_tutorial_data
    
### Windows

    $ python create_dataset.py --ndjson_path rnn_tutorial_dataset \
      --output_path rnn_tutorial_data

## train_model.py

### Mac or Linux

#### CPU

    $ python3 train_model.py\
        --training_data=rnn_tutorial_data/training.tfrecord-00000-of-00010\
        --eval_data=rnn_tutorial_data/eval.tfrecord-00000-of-00010\
        --classes_file=rnn_tutorial_data/training.tfrecord.classes\
        --model_dir=/tmp/quickdraw_model/
    
#### GPU
    
    $ python3 train_model.py\
        --training_data=rnn_tutorial_data/training.tfrecord-00000-of-00010\
        --eval_data=rnn_tutorial_data/eval.tfrecord-00000-of-00010\
        --classes_file=rnn_tutorial_data/training.tfrecord.classes\
        --model_dir=/tmp/quickdraw_model/\
        --cell_type=cudnn_lstm

    
### Windows

#### CPU

    $ python train_model.py\
        --training_data=rnn_tutorial_data/training.tfrecord-00000-of-00010\
        --eval_data=rnn_tutorial_data/eval.tfrecord-00000-of-00010\
        --classes_file=rnn_tutorial_data/training.tfrecord.classes\
        --model_dir=/tmp/quickdraw_model/
    
#### GPU
    
    $ python train_model.py\
        --training_data=rnn_tutorial_data/training.tfrecord-00000-of-00010\
        --eval_data=rnn_tutorial_data/eval.tfrecord-00000-of-00010\
        --classes_file=rnn_tutorial_data/training.tfrecord.classes\
        --model_dir=/tmp/quickdraw_model/\
        --cell_type=cudnn_lstm

### Other Setting

#### you can modify training_data and eval_data
    
    --training_data=rnn_tutorial_data/training.tfrecord-?????-of-?????
    --eval_data=rnn_tutorial_data/eval.tfrecord-?????-of-?????

#### you can append other settings

    --training_data :   Path to training data (tf.Example in TFRecord format)
    --eval_data     :   Path to evaluation data (tf.Example in TFRecord format)
    --classes_file  :   Path to a file with the classes - one class per line
    --num_layers    :   Number of recurrent neural network layers.
    --num_nodes     :   Number of node per recurrent network layer.
    --num_conv      :   Number of conv layers along with number of filters per layer.
    --conv_len      :   Length of the convolution filters.
    --cell_type     :   Cell type used for rnn layers: cudnn_lstm, lstm or block_lstm.
    --batch_norm    :   Whether to enable batch normalization or not.
    --learning_rate :   Learning rate used for training.
    --gradient_clipping_norm : Gradient clipping norm used during training.
    --dropout       :   Dropout used for convolutions and bidi lstm layers.
    --steps         :   Number of training steps.
    --batch_size    :   Batch size to use for training/evaluation.
    --model_dir     :   Path for storing the model checkpoints.
    --self_test     :   Whether to enable batch normalization or not.

## How to use Tensorboard

    $ tensorboard --logdir=/tmp/quickdraw_model/eval